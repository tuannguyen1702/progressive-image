import { Component, Prop, h, State, Element } from '@stencil/core';

@Component({
  tag: 'ny-image',
  styleUrl: 'ny-image.scss',
  shadow: true
})
export class NyImage {
  @Element() el: HTMLElement;
  @Prop() src: string;
  @Prop() largeSrc: string;
  @Prop() alt: string;

  @State() oldSrc: string;
  io: IntersectionObserver;

  componentDidLoad() {
    setTimeout(() => {
      this.addIntersectionObserver();
    }, 300);
    
  }

  componentWillUpdate() {
    if (this.src !== this.oldSrc) {
      this.addIntersectionObserver();
    }
    this.oldSrc = this.src;
  }

  handleImage() {
    const imageContainer: HTMLElement = this.el.shadowRoot.querySelector('.progressive-img');
    const image: HTMLImageElement = this.el.shadowRoot.querySelector('img');
    const newImg = new Image()

    const removeImg = () => {
      if (image) {
        if (image.alt) newImg.alt = image.alt;
        imageContainer.removeChild(image);
      }  
      newImg.classList.remove('reveal');
    }

    newImg.onload = () => {
      if(window.requestAnimationFrame) {
        requestAnimationFrame(() => {
          imageContainer.insertBefore(newImg, image && image.nextSibling).addEventListener('animationend', removeImg);
  
        }) 
      } else {
        imageContainer.insertBefore(newImg, image && image.nextSibling);
        setTimeout(() => {
          removeImg();
        }, 1000);
      }
      
      image.removeAttribute('data-src');
    };
   
    newImg.className = 'reveal';
    newImg.src = image.getAttribute('data-src');
  }

  addIntersectionObserver() {
    if (!this.src) {
      return; 
    }
    if ('IntersectionObserver' in window) {
      this.io = new IntersectionObserver((data: any) => {
        // because there will only ever be one instance
        // of the element we are observing
        // we can just use data[0]
        if (data[0].isIntersecting) {
          this.handleImage();
          this.removeIntersectionObserver();
        }
      })

      this.io.observe(this.el.shadowRoot.querySelector('img'));
    } else {
      // fall back to setTimeout for Safari and IE
      setTimeout(() => {
        this.handleImage();
      }, 300);
    }
  }

  removeIntersectionObserver() {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }

  render() {
    return (
      <span class="progressive-img">
        <img class="preview" src={this.src} data-src={this.largeSrc || this.src} alt={this.alt}></img>
      </span>
    );
  }
}

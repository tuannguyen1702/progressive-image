![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# ny-image

ny-image is a progressive image web component, this component has developed base on [Stencil](https://stenciljs.com/), build to support all js framework & pure js.

![gif](https://github.com/ccforward/cc/raw/master/Blog/pic/progressive-0.gif)


## Run the sample

To try this component:

```bash
git clone git@github.com:tuannguyen1702/progressive-image.git
cd progressive-image
```

and run:

```bash
npm install
npm start
```

## Using this component with different JS frameworks 

### Node Modules
- Run `npm install ny-image --save`
- Put a script tag similar to this `<script src='node_modules/ny-image/dist/ny-image.js></script>` in the head of your index.html
- Then you can use the element `<ny-image>` anywhere in your template, JSX, html etc

### In a stencil-starter app
- Run `npm install ny-image --save`
- Add this import to your root component or root module: `import 'ny-image'`;
- Then you can use the element `<ny-image>` anywhere in your template, JSX, html etc

### In a React/Rollup/Webpack app
- Run `npm install ny-image --save`
- Add this import to your root component or root module: `import { defineCustomElements } from 'ny-image';`;
- Call `defineCustomElements(window);` in your js file
- [Refer to Stencil](https://stenciljs.com/docs/overview)


## Example usage

```html
<ny-image src="/assets/images/s1.jpg" large-src="/assets/images/1.jpg" alt="my photo"></ny-image>
```

- 'url'  is a very small preview image - typically 20px in width saved with high JPEG compression.
- 'large-src'  is the large image
/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface NyImage {
        "alt": string;
        "largeSrc": string;
        "src": string;
    }
}
declare global {
    interface HTMLNyImageElement extends Components.NyImage, HTMLStencilElement {
    }
    var HTMLNyImageElement: {
        prototype: HTMLNyImageElement;
        new (): HTMLNyImageElement;
    };
    interface HTMLElementTagNameMap {
        "ny-image": HTMLNyImageElement;
    }
}
declare namespace LocalJSX {
    interface NyImage {
        "alt"?: string;
        "largeSrc"?: string;
        "src"?: string;
    }
    interface IntrinsicElements {
        "ny-image": NyImage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ny-image": LocalJSX.NyImage & JSXBase.HTMLAttributes<HTMLNyImageElement>;
        }
    }
}
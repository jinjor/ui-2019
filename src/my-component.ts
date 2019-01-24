import hyperHTML from "./hyperhtml.js";

export class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const html = hyperHTML(shadowRoot);
    html`
      <style>
        :host {
          display: block;
          background-color: #222;
          color: pink;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      </style>
      <b>🚀Hello, new stack!</b>
    `;
  }
}

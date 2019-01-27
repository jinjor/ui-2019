import { html } from "./html.js";

export class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = html`
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

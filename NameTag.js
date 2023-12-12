//import { LitElement, html, css } from "lit";

class NameTag extends HTMLElement {
  static properties = {
    name: {},
  };
  constructor() {
    super();
    // Declare reactive properties
    this.name = "World of kavi";
  }
  connectedCallback() {
    this.innerHTML = `<p>NameTag element</P>
    <h3> Hello ${this.name}<h3>
    `;
  }
  //   render() {
  //     return html`Hello I'm in the  ${this.name name-tag.js}.`;
  //   }
}
customElements.define("name-tag", NameTag);

// const tag = document.createElement('name-tag');
// // tag.name = 'dynamically created';
// document.body.appendChild(tag);

class HelloWorld extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<p>Hello world from constructor</P>
    <h3> Hello ${this.getAttribute("name")}<h3>
    `;
  }
}
customElements.define("hello-world", HelloWorld);

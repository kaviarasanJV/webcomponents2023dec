class TodoListExample extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");
    template.innerHTML = `<div> 
    <input type="text" id="inputBox"/>
    <button id="itemButton">Add item </button>
    <ul id="itemList"></ul>
    </div>`;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));

    ///access the elements
    this.inputBox = this.shadowRoot.querySelector("inputBox");
    this.itemButton = this.shadowRoot.querySelector("itemButton");
    this.itemList = this.shadowRoot.querySelector("itemList");
  }
}
customElements.define("todolist-example", TodoListExmple);

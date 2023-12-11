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

    ///add event Listener
    console.log("button clicked");
    const list = document.createElement("li");
    list.textContent = this.inputBox.value;
    this.itemList.appendChild(list);
    this.inputBox.value = "";
  }
}
customElements.define("todolist-example", TodoListExample);

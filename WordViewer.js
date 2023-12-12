import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
//@customElement('word-viewer');
class WordViewer extends LitElement {
  static properties = {
    words: {},
    terms: {},
    intervalTimer: {},
  };

  static styles = css`
    h3 {
      color: blue;
    }
    i {
      color: green;
      background-color: yellow;
    }
    b {
      color: red;
    }
    //
  `;
  // constructor() {
  //     super();
  //     // Declare reactive properties
  //     this.newname = 'word viewer element';
  //   }

  render() {
    return html`<br />
      <h3>This is the ${this.newname}</h3>
      <br />
      <i>${this.terms} </i><br />
      <b>${this.words}</b>`;
  }
}
customElements.define("word-viewer", WordViewer);

const view = document.createElement("word-viewer");
view.words = "word viewer";
view.terms = "real world experience";
view.newname = "kavi element";
document.body.appendChild(view);

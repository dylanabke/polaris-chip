import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQld3siqapzGeWKJIQMQ0hIPhy19xztUTMfEg&s";
    this.link = "Details";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
        
      }
      :host([fancy])  {
        display: block;
        background-color: lightblue;
        border: 2px solid black;
        width: 400px;
      }


      div {
        background-color: lightgray;
        border: 2px solid black;
        padding: 10px;
        margin: 10px;
        width: 350px;
        height: 500px;
        align-items: center;
      }


      h1 {
        color: navy;
        text-align: center;
        font-size: 2em;
        padding: 0;
        margin:0;
      }
      img {
        width: 200px;
        height: auto;
        text-align: center;
        margin: 20px 75px 20px;
      }
      button {
        background-color: white;
        border: 2px solid navy;
        color: black;
        font-size: 1.5em;
        padding: 10px;
        margin: 20px 75px 50px;
        width: 200px;
        border-radius: 5px;
        text-align: center;
        align-items: center;
      }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
    <div>
      <h1>${this.title}</h1>
      <img src="${this.image}" alt ="${this.title}"/>
      <a href=${this.link} target="_blank">
        <button class="btn"><em>Details</em></button>
        </a>
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot>${this.description}</slot>
        </div>
      </details>
      
    </div>`;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      image: { type: String },
      link: { type: String }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

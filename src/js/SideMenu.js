import { html, css, LitElement } from 'lit-element';

export default class SideMenu extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        color: var(--todo-lists-text-color, #000);
      }
    `;
  }

  static get properties() {
    return {
      title: { type: String },
    };
  }

  constructor() {
    super();
    this.title = 'Your Todo List Title';
  }



  render() {
    return html`     
    <style>
        #side-menu{
          background: #323759;
          height: 100vh;
          padding: 25px 25px;
          font-Family: sans-serif;

        }
        #side-menu nav a{
          color: #ccced7;
          text-decoration: none; 
          text-transform: uppercase;
          display: block;
          padding: 10px;
        }
        #side-menu nav a span.icon{
          padding: 10px 10px 10px 0;
        }
        .title{
          font-weight: 700;
          color: #ccced7;
          padding: 10px 10px 10px 10px;
        }
        .logo{
          display: inline-block;
        }
        .logo img{
          width: 50px;
        }
    </style>

    <div id="side-menu">
      <div class="logo">
        <img src="https://img.icons8.com/plasticine/2x/todo-list.png"><div class="title">TODO Menu</div>
      </div>
      <div class="menu"> </div>
        <nav>
          <a href="#"><span class="icon"> + </span>Add Todo Item</a>
          <a href="#"><span class="icon"> + </span>Add Todo Item</a>
          <a href="#"><span class="icon"> + </span>Add Todo Item</a>
          <a href="#"><span class="icon"> + </span>Add Todo Item</a>
        </nav>
    </div>
    `;
  }
}

customElements.define('side-menu', SideMenu)

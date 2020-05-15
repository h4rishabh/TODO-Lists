import { html, css, LitElement } from 'lit-element';
import Todo from './Todo.js'
import HighImportanceTODO from './HighImportanceTODO.js'

export default class DashboardContent extends LitElement {
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
      #content-area{
        background: #FCFDFF;
        padding: 50px 80px;
      }
      h2{
        font-Family: sans-serif;
      }
      #content-area .h2{
        color: #717599;
        font-weight: 300;
      }

    </style>
    <section id="content-area">
      <h2>Important list</h2>
      <high-importance-todo></high-importance-todo> 
      <to-do></to-do>
    </section> 
    `;
  }
}

customElements.define('dashboard-content', DashboardContent)

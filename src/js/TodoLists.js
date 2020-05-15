import { html, css, LitElement } from 'lit-element';
import SideMenu from './SideMenu.js'
import Dashboard from './DashboardContent.js'

export class TodoLists extends LitElement {
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
      .main-page{
        display: grid;
        grid-template-columns: 250px 1fr;
      }
    </style>
    <div class="main-page">
      <side-menu></side-menu>
      <dashboard-content></dashboard-content>
    </div>
    `;
  }
}

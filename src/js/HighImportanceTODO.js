import { html, css, LitElement } from 'lit-element';

export default class HighImportanceTODO extends LitElement {
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
      .important{
        max-width: 800px;
        display: grid;
        font-Family: sans-serif;
        grid-template-columns: 1fr 1fr 1fr;
         grid-gap: 20px;
      }

      h2{
          color: #3e4162;
          font-weight: 300;
          grid-columns: 1/4;
      }  
      .card{
        width: 100%;
        display: grid;
        color: #3d4060;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        border-radius: 10px;
        transition: all .4s ease-in-out;  
        cursor: pointer;
        padding-top: 15px;
      }
      .card:hover{
        -webkit-box-shadow: 0px 5px 69px -19px rgba(5,5,5,0.27);
        -moz-box-shadow: 0px 5px 69px -19px rgba(5,5,5,0.27);
        box-shadow: 0px 5px 69px -19px rgba(5,5,5,0.27);
      
      }
      .card .user-img{
          background: url('https://img.favpng.com/11/17/14/data-structure-logo-brand-png-favpng-SiHV4dTHEtkiit6Uf0F405XNv.jpg');
          height: 50px;
          width: 50px;
          background-size: cover;
          justify-self : center;
          border-radius: 50%;
          grid-column: 1/3;
      }
      .card .fullname{
        font-weight: 700;
        text-transform: capitalize;
        grid-column: 1/3;
        padding: 20px;
        border-bottom: 1px solid rgba(0,0,0, .1);
      }
      .number{
          grid-column: 1/3;
          padding: 20px 0;
          border-bottom: 1px solid rgba(0,0,0, .1);

      }
      .category{
        border-left: 1px solid rgba(0,0,0, .1);

      }
      .sub{
        color: #b4b5c4;
        font-weight: 300;
        font-size : .8rem;
        text-align: center;
        display: block;
        margin: 5px 0;
      }
      .text{
        text-align: center;
        display: block;
        
      }
      .state
      .fullname, .user-img, .category, .state, .number{
        font-size: 1.4rem;
        font-weight: 500;
        padding: 15px;
     }
    </style>
    <section class="important">
      <div class="card">
          <div class="user-img"></div>
          <div class="fullname">
              <span class="text">To Revise DS</span>
              <span class="sub">Task Name</span>
          </div>
          <div class="number">
             <span class="text">Tree, Graph<span>
            <span class="sub">Description</span>

          </div>
          <div class="state">
              <span class="text">NA</span>
              <span class="sub">Place</span>
          </div>
          <div class="category">
              <span class="text">Tech</span>
              <span class="sub">Category</span>
          </div>
      </div>
       <div class="card">
          <div class="user-img"></div>
          <div class="fullname">
              <span class="text">Complete Assignment</span>
              <span class="sub">Task Name</span>
          </div>
          <div class="number">
             <span class="text">Linked List<span>
            <span class="sub">Description</span>

          </div>
          <div class="state">
              <span class="text">NA</span>
              <span class="sub">Place</span>
          </div>
          <div class="category">
              <span class="text">Tech</span>
              <span class="sub">Category</span>
          </div>
      </div>
       <div class="card">
          <div class="user-img"></div>
          <div class="fullname">
              <span class="text">To Revise DS</span>
              <span class="sub">Task Name</span>
          </div>
          <div class="number">
             <span class="text">Search, Sorting<span>
            <span class="sub">Description</span>

          </div>
          <div class="state">
              <span class="text">NA</span>
              <span class="sub">Place</span>
          </div>
          <div class="category">
              <span class="text">Tech</span>
              <span class="sub">Category</span>
          </div>
      </div>
    </section>
    `;
  }
}

customElements.define('high-importance-todo', HighImportanceTODO)

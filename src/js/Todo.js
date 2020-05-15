import { html, css, LitElement } from 'lit-element';

export default class Todo extends LitElement {
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
      .contacts{
        max-width: 800px;       
        font-Family: sans-serif;

      }

      .contact{
        width: 100%;
        display: grid;
        color: #3d4060;
        grid-template-columns: 1fr 3fr 3fr 1fr 1fr;
        text-align: center;
        padding: 20px;
        border-radius: 10px;
        transition: all .4s ease-in-out;  
        cursor: pointer;
      }
      .contact:hover{
        -webkit-box-shadow: 0px 5px 69px -19px rgba(5,5,5,0.27);
        -moz-box-shadow: 0px 5px 69px -19px rgba(5,5,5,0.27);
        box-shadow: 0px 5px 69px -19px rgba(5,5,5,0.27);
      
      }
      .contact .user-img{
          background: url('https://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/java-icon.png');
          height: 40px;
          width: 40px;
          background-size: cover;
          background-position: center center;
          border-radius: 20px;
      }
      .contact .fullname{
        font-weight: 700;
        text-transform: capitalize;

      }
      .number{
        color: 
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
      .fullname, .user-img, .category, .state, .number{
        font-size: 1.4rem;
        font-weight: 500;
      }
    </style>
    <section class="contacts">
      <h2>Todo Items</h2>

      <div class="contact">
          <div class="user-img"></div>
          <div class="fullname">
              <span class="text">Java Applets</span>
              <span class="sub">Task Name</span>
          </div>
          <div class="number">
             <span class="text">Revise<span>
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

customElements.define('to-do', Todo)

class CustomHeading extends HTMLElement {
    constructor() {
      super();
  
      const heading = document.createElement('h1');
      heading.textContent = 'Pencarian Film';
  
      const style = document.createElement('style');
      style.textContent = `
        h1 {
            font-family: 'PT Serif', serif;
            font-size: 3rem;
            color: #000000;
            background-color: #B5CB99;
            padding: 10px;
            border-radius: 10px;
            text-align: center; 
            line-height: 1.6; 
            height: 100%; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
          }
      `;
  
      this.appendChild(style);
      this.appendChild(heading);
    }
  }
  
  customElements.define('custom-heading', CustomHeading);
  
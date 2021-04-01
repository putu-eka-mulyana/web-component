import css from 'materialize-css/dist/css/materialize.min.css';
class Navbar extends HTMLElement{
    connectedCallback(){
        this.attachShadow({mode:"open"})
        this.render();
        
    }
    render(){
        this.shadowRoot.innerHTML=`
        <style>
            ${css}
        </style>
        <nav class="blue darken-3">
            <div class="row">
            <div class="col s12">
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Amiibo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">

            </ul>
            </div>
            </div>
            </div>
        </nav>
        `
    }
}
customElements.define("navbar-app", Navbar);
import css from 'materialize-css/dist/css/materialize.min.css';
class Search extends HTMLElement{
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback(){
        this.render();
    }
    set eventSearch(even){
        this._eventSearch = even
        this.render();
    }
    get value() {
        return this.shadowDOM.querySelector("#first_name2").value;
    }
    render(){
        this.shadowDOM.innerHTML=`
        <style>
            ${css}
            .top{
                margin-top:50px;
            }
        </style>
        <div class="container top">
        <div class="row">
            <div class="input-field col s12 m10">
                <input id="first_name2" placeholder="Search" type="text" class="validate">
                <label class="active" for="first_name2">Search</label>
            </div>
            <div class="col s12 m2">
                <button class="waves-effect waves-light btn btn-large" id="cari">Search</button>
            </div>
        </div>
        </div>
        `
        this.shadowDOM.querySelector("#cari").addEventListener("click", this._eventSearch);
    }
}

customElements.define("search-app", Search);
import css from 'materialize-css/dist/css/materialize.min.css';
import './item-app';
class ListApp extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode: "open"});
    }
    set items(items){        
        this._items = items
        this.render()
    }
    render(){
        let ContainerItem = document.createElement('div');
        ContainerItem.className="container";
        let Row = document.createElement('div');
        Row.className="row";
        this._items.forEach(item => {
            const Item = document.createElement('item-app');
            Item.item = item
            Row.appendChild(Item)
        });
        ContainerItem.append(Row);
        this.shadowRoot.innerHTML=`
            <style>
                ${css}
            </style>
            `
        this.shadowRoot.appendChild(ContainerItem)
        // console.log(this.shadowDOM);
    }
    renderError(message){
        this.shadowRoot.innerHTML=`
            <h1>${message}</h1>
        `
    }
}
customElements.define("list-app", ListApp);
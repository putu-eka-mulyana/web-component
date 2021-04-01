class ItemApp extends HTMLElement {
    set item(item){
        this._item = item;
        this.render();
    }
    render(){
        this.innerHTML=`
            <div class="col s12 m6">
            <div class="card">
            <div class="card-image">
                <img class="responsive-img" src="${this._item.image}">
            </div>
            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">${this._item.name}</span>
                <ul class="collection">
                    <li class="collection-item">Amiibo Series <span class="badge" >${this._item.amiiboSeries}</span></li>
                    <li class="collection-item">Game Series <span class="badge" >${this._item.gameSeries}</span></li>
                    <li class="collection-item">Character <span class="badge" >${this._item.character}</span></li>
                    <li class="collection-item">Type <span class="badge" >${this._item.type}</span></li>
              </ul>
            </div>
            <div class="card-action">
                <h6>Release</h6>
                <p>Australia <span class="badge">${this._item.release.au}</span></p>
                <p>Europe <span class="badge" >${this._item.release.eu}</span></p>
                <p>Japan <span class="badge" >${this._item.release.jp}</span></p>
                <p>Namibia <span class="badge" >${this._item.release.na}</span></p>
            </div>
            </div>
        </div>
        `  
        
    }
}
customElements.define("item-app", ItemApp);
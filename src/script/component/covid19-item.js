class ClubItem extends HTMLElement {
 
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set club(club) {
        this._club = club;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    
                }
                :host {
                    display: block;
                    margin-bottom: 25px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
               
                .covid-info {
                    padding: 30px;
                    background: #FFFFFF;
                }
               
                .covid-info > h1 {
                    font-weight: lighter;
                    font-size: 30px;
                }
               
                .covid-info > p {
                    margin-top: 20px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 10; /* number of lines to show */
                }
              
                
                
            </style>
            <div class="covid-info">
            <h1>${this._club.region.name}</h1>
            <p><h2>${this._club.region.province}</h2></p>
            <p><h2 style="color:#0000FF;">Dikonfirmasi : ${this._club.confirmed}</h2></p>
            <p><h3 style="color:#FFD700;">Kasus Aktif : ${this._club.active}</h3></p>
            <p><h3 style="color:#00FF00;">Sembuh : ${this._club.recovered}</h3></p>
            <p><h4 style="color:#FF0000;">Meninggal Dunia: ${this._club.deaths}</h4></p>
            <p><h4 style="color:#FF7F00;">Terakhir update : ${this._club.last_update}</h4></p>

        </div>`;
      
    }
   
 }
  
 customElements.define("club-item", ClubItem);
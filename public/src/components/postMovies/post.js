class Post extends HTMLElement {
    static get observedAttributes() {
        retun ["name", "year", "director", "characters", "description"]
    }

    constructor() {
        super();
        this.attachShadow({mode:open});
        this.aliceImg = './src/imageMovies/alice.jpeg'
        this.amorImg = './src/imageMovies/amormina.jpeg'
        this.caminoImg = './src/imageMovies/camino.jpeg'
        this.christmasImg = './src/imageMovies/christmas.jpeg'
        this.ciudadImg = './src/imageMovies/ciudadpapel.jpeg'
        this.glassImg = './src/imageMovies/glass.jpeg'
        this.hillImg = './src/imageMovies/hillhouse.jpeg'
        this.iraImg = './src/imageMovies/iradedios.jpeg'
        this.jojoImg = './src/imageMovies/Jojo.jpeg'
        this.rainImg = './src/imageMovies/rain.jpeg'
        this.sandmanImg = './src/imageMovies/sandman.jpeg'
        this.spenserImg = './src/imageMovies/spenser.jpeg'
        this.standImg = './src/imageMovies/stand.jpeg'
    }

    connectedCallback() { 
            this.render();
          }
        
          attributeChangedCallback(propName, oldValue, newValue) {
            this.render();
          }
        
    render() {
        this.shadowRoot.innerHTML = `
        <section>
        <h1>${this.name}</h1>
        <p> Desciption: ${this.description}</p>
        </section>`
          }
}
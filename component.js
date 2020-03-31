class xComponent extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = 'Hola mundo desde mi custom Element';
    }
}

customElements.define('x-component', xComponent);

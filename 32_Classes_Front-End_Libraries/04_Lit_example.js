class AppCounter extends LitElement {
  static get properties() {
    return {
      size: { type: String }
    };
  }

  constructor() {
    super();
    this.counter = 0;
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('component added to the DOM (first time)');
  }

  firstUpdated() {
    console.log('first update finished');
  }

  handleClick() {
    this.counter += 1;
    this.requestUpdate();
  }

  render() {
    return html` <button onclick=${this.handleClick}>Add 1</button> `;
  }
}

window.customElements.define('app-counter', AppCounter);

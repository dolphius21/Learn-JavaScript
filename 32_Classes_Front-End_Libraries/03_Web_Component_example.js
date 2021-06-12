class AppDashboard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    // assuming there's a <template id="dashboard-template">...</template> in the HTML
    const template = document.querySelector('#dashboard-template');
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ['mode', 'size'];
  }

  connectedCallback() {
    console.log('AppDashboard rendered (the first time)');
  }
}

window.customElements.define('app-dashboard', AppDashboard);

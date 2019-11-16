import { h as html } from '../common/lit-html-9957b87e.js';
import { LitElement, css } from '../lit-element.js';

class TmConsoleView extends LitElement {
  // noinspection JSUnusedGlobalSymbols
  static get properties() {
    return {
      heading: {
        type: String
      }
    };
  }

  constructor() {
    super();
    this.consoleLog = console.log;
    this.consoleLog('Constructing tm-media-test');
    this.interceptConsoleLog();
  }

  static get styles() {
    //language=CSS
    return css`
            :host {
                display: inline-block;
            }
            h2 {
                width:100%;
                color: gray;
                text-align: center;
            }
            button {
                border: solid lightgray 1px;
            }
            div.buttons {
                width: 100%;
                display: flex;
                justify-content: center;
            }
            div.logs {
                width: 100%;
            }

            ul {
                list-style-type:none;
            }
            li.log {
                color: black;
            }

            li.warn {
                color: orange;
            }

            li.error {
                color: red;
            }
        `;
  } // noinspection JSUnusedGlobalSymbols


  render() {
    return html`
          <h2>Console Log</h2>
          <div class="buttons">
            <button @click="${this.clearLogs}">clear logs</button>
            <slot></slot>
          </div>
          <div id="logs"></div>
        `;
  } // noinspection JSUnusedGlobalSymbols


  firstUpdated(_changedProperties) {
    super.firstUpdated(_changedProperties);
    let div = this.shadowRoot.getElementById('logs');
    this.logElememnt = document.createElement('ul');
    div.appendChild(this.logElememnt);
  }

  interceptConsoleLog() {
    const consoleLog = console.log;

    console.log = (...args) => {
      this.htmlLog(args[0], 'log');
      consoleLog(...args);
    };

    const consoleWarn = console.warn;

    console.warn = (...args) => {
      this.htmlLog(args[0], 'warn');
      consoleWarn(...args);
    };

    const consoleError = console.error;

    console.error = (...args) => {
      this.htmlLog(args[0], 'error');
      consoleError(...args);
    };
  }

  clearLogs() {
    let child = this.logElememnt.lastElementChild;

    while (child) {
      this.logElememnt.removeChild(child);
      child = this.logElememnt.lastElementChild;
    }
  }

  htmlLog(message, level) {
    if (this.logElememnt) {
      const li = document.createElement('li');
      li.classList.add(level);
      li.innerText = message;
      this.logElememnt.appendChild(li);
    }
  }

}

window.customElements.define('tm-console-view', TmConsoleView);

import {html, render} from "./web_modules/lit-html.js";

render(html`
    <style>
        body {
          background-color: lightgray;
          padding: 0;
          margin: 0;
        } 
        tm-console-view {
            width: 100%;
        }
        button {
            border: solid lightgray 1px;
        }
    </style>
    <tm-console-view>
        <button @click="${() => runTest()}">Run Test</button>
    </tm-console-view>
`, document.querySelector('body'));

function runTest() {
    console.log('This should be a normal log.');
    console.warn('This should be a warning log.');
    console.error('This should be a error log.');

}

setTimeout(() => {
    runTest();
},1000);

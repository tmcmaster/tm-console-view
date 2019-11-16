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
    </style>
    <tm-console-view></tm-console-view>
`, document.querySelector('body'));

setTimeout(() => {
    console.log('This should be a normal log.');
    console.warn('This should be a warning log.');
    console.error('This should be a error log.');
},1000);

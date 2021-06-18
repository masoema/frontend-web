import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';
import CONFIG from './globals/config';

// const menu = document.querySelector('#menu');
// const hero = document.querySelector('.hero');
// const main = document.querySelector('main');
// const drawer = document.querySelector('#drawer');

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});

// hero.addEventListener('click', function () {
//     drawer.classList.remove('open');
// });

// main.addEventListener('click', function () {
//     drawer.classList.remove('open');
// });

// menu.addEventListener("click", event => {
//     drawer.classList.toggle("open");
//     event.stopPropagation();
//    });

// main.addEventListener("click", event => {
//     drawer.classList.remove("open");
//     event.stopPropagation();
//    })
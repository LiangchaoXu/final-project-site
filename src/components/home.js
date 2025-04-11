import homeTemplate from '../templates/home.hbs';
const homeData = require('../data/home.js');

export default function renderHome() {
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = homeTemplate(homeData);
}
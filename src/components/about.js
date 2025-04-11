import aboutTemplate from '../templates/about.hbs';
const aboutData = require('../data/about.js');

export default function renderAbout() {
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = aboutTemplate(aboutData);
}
import productsTemplate from '../templates/products.hbs';
const productsData = require('../data/products.js');

export default function renderProducts() {
    const app = document.getElementById('app');
    if (!app) return;
    app.innerHTML = productsTemplate(productsData);
}
import { initRouter, navigateTo } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    initRouter();
    navigateTo(window.location.pathname);
});
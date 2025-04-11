export async function navigateTo(route) {
    let component;
    switch (route) {
        case '/':
        case '/home':
            component = await import('./components/home.js');
            break;
        case '/products':
            component = await import('./components/products.js');
            break;
        case '/about':
            component = await import('./components/about.js');
            break;
        default:
            component = await import('./components/home.js');
            break;
    }
    component.default();
}

export function initRouter() {
    window.addEventListener('popstate', () => {
        navigateTo(window.location.pathname);
    });

    document.addEventListener('click', (e) => {
        if (e.target.matches('a[data-link]')) {
            e.preventDefault();
            history.pushState(null, null, e.target.href);
            navigateTo(window.location.pathname);
        }
    });
}
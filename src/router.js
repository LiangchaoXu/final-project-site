// Export the Router class as the default export
export default class Router {
  constructor() {
    console.log('Router constructor called');

    // Define the routes and their corresponding dynamic imports
    this.routes = {
      '/': () => import('./components/home.js').then(module => module.Home),
      '/products': () => import('./components/products.js').then(module => module.Products),
      '/about': () => import('./components/about.js').then(module => module.About)
    };
  }

  // Navigate to the given route based on the URL hash
  async navigate(hash) {
    console.log(`Navigating to ${hash}`);
    try {
      // Remove the '#' from the hash to get the route path
      let routePath = hash.replace('#', '') || '/';
      console.log(`Adjusted route path: ${routePath}`);

      // Check if the route exists, if not, fallback to home page
      if (!this.routes[routePath]) {
        console.error(`Route not found for path: ${routePath}. Available routes:`, Object.keys(this.routes));
        routePath = '/';
      }

      // Update the URL hash (for browser navigation)
      window.location.hash = routePath === '/' ? '' : routePath;

      // Dynamically load the component for the route
      const componentFunc = await this.routes[routePath]();
      if (componentFunc) {
        console.log(`Loading component for ${routePath}`);
        // Render the component's HTML into the #app container
        const app = document.getElementById('app');
        app.innerHTML = componentFunc();
      } else {
        console.error(`No component found for path: ${routePath}`);
      }
    } catch (error) {
      console.error(`Error navigating to ${hash}:`, error);
    }
  }

  // Initialize the router and set up event listeners
  init() {
    console.log('Router init called');
    try {
      // Load the initial route based on the current URL hash
      this.navigate(window.location.hash || '#');

      // Listen for clicks on navigation links
      document.body.addEventListener('click', (e) => {
        if (e.target.tagName === 'A' && e.target.getAttribute('data-link')) {
          e.preventDefault();
          const href = e.target.getAttribute('href');
          console.log(`Navigating via click to: ${href}`);
          this.navigate(href);
        }
      });

      // Listen for changes to the URL hash (e.g., browser back/forward)
      window.addEventListener('hashchange', () => {
        console.log(`Hashchange event, navigating to: ${window.location.hash}`);
        this.navigate(window.location.hash);
      });
    } catch (error) {
      console.error('Error initializing router:', error);
    }
  }
}
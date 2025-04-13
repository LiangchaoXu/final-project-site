// Import the Router module for handling client-side routing
import Router from './router';

// Import the global CSS styles
import './styles.css';

console.log('Starting index.js execution');

console.log('index.js loaded, imports complete');

try {
  console.log('Adding navigation');
  // Add navigation links and main app container to the page
  document.body.insertAdjacentHTML('beforeend', `
    <nav>
      <a href="#/" data-link>Home</a>
      <a href="#/products" data-link>Products</a>
      <a href="#/about" data-link>About</a>
    </nav>
    <div id="app"></div>
  `);
  
  console.log('Navigation added, initializing router');

  // Create a new Router instance and initialize it
  const router = new Router();
  router.init();

  console.log('Router initialized');
} catch (error) {
  // Log any errors that occur during initialization
  console.error('Error in index.js:', error);
}
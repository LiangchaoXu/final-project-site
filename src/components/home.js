// Import the Handlebars template for the Home page
import template from '../templates/home.hbs';

// Import the data for the Home page
import data from '../data/home';

// Define and export the Home component function
export function Home() {
  try {
    // Generate the HTML content using the template and data
    return template(data);
  } catch (error) {
    // If there's an error generating the page, log the error and return a fallback message
    console.error('Error generating home component:', error);
    return '<p>Error loading home page.</p>';
  }
}
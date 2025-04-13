// Import the Handlebars template for the Products page
import template from '../templates/products.hbs';

// Import the data for the Products page
import data from '../data/products';

// Define and export the Products component function
export function Products() {
  try {
    // Generate the HTML content using the template and data
    return template(data);
  } catch (error) {
    // If there's an error generating the page, log the error and return a fallback message
    console.error('Error generating products component:', error);
    return '<p>Error loading products page.</p>';
  }
}
// Import the Handlebars template for the About page
import template from '../templates/about.hbs';

// Import the data for the About page
import data from '../data/about';

// Define and export the About component function
export function About() {
  try {
    // Generate the HTML content using the template and data
    return template(data);
  } catch (error) {
    // If there's an error generating the page, log the error and return a fallback message
    console.error('Error generating about component:', error);
    return '<p>Error loading about page.</p>';
  }
}
# Dragon Digital Solutions - Agency Website

A single-page agency website built with 11ty (Eleventy) static site generator as per the project specification.

## Features

- Bold and vibrant design with modern aesthetics
- Responsive layout that works on all devices
- Optimized for performance with minified assets
- SEO-friendly structure and meta tags
- Lazy loading of images for better performance

## Tech Stack

- **Static Site Generator**: 11ty (Eleventy)
- **CSS**: Custom CSS with variables for easy theming
- **JavaScript**: Vanilla JS for interactions and animations
- **Build Optimization**: Minified HTML, CSS, and JS
- **Images**: WebP format for optimal loading

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Build for production:
   ```
   npm run build
   ```

The production-ready site will be generated in the `dist` folder.

## Project Structure

- `src/`: Source files
  - `_includes/`: Layout templates and partials
  - `assets/`: CSS, JavaScript, and images
  - `index.njk`: Main homepage
  - `privacy-policy.njk`: Privacy policy page
- `.eleventy.js`: Eleventy configuration
- `STYLE-GUIDE.md`: Comprehensive style guide for future updates

## Deployment

This site is designed to be deployed to Cloudflare Pages or any static hosting service.

## Style Guide

For detailed information on how to update and maintain this website, please refer to the [Style Guide](STYLE-GUIDE.md). 
# Dragon Digital Solutions Style Guide

This document outlines the styles, components, and guidelines for maintaining and updating the Dragon Digital Solutions website.

## Table of Contents

1. [Color Palette](#color-palette)
2. [Typography](#typography)
3. [Components](#components)
4. [Updating Content](#updating-content)
5. [Adding New Portfolio Items](#adding-new-portfolio-items)
6. [Adding New Services](#adding-new-services)
7. [SEO Guidelines](#seo-guidelines)

## Color Palette

The website uses a set of CSS variables for consistent colors throughout:

```css
:root {
  --primary: #FF0066;    /* Bold magenta */
  --secondary: #00CC99;  /* Vivid teal */
  --bg: #1A1A1A;         /* Dark background */
  --text: #FFFFFF;       /* White text */
  --dark-accent: #333333;
  --light-accent: #CCCCCC;
  --transition: all 0.3s ease;
}
```

To modify colors, update these variables in the `/src/_includes/css/critical.css` file.

## Typography

The site uses the Inter font family, with fallbacks to system fonts:

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
```

Font weights used throughout the site:
- Regular (400): Body text
- Semibold (600): Navigation, buttons
- Bold (700): Headings, logo

## Components

### Buttons

Standard button:

```html
<a href="#" class="btn">Button Text</a>
```

Email button (with icon):

```html
<a href="mailto:example@example.com" class="email-btn">
  <svg><!-- Icon SVG code --></svg>
  Email Us
</a>
```

### Cards

Service card:

```html
<div class="service-card fade-in">
  <svg class="service-icon" viewBox="0 0 24 24">
    <!-- SVG path data -->
  </svg>
  <h3>Service Title</h3>
  <p>Service description text</p>
</div>
```

Portfolio item:

```html
<a href="/case-study-url" class="portfolio-item fade-in">
  <img data-src="/assets/images/portfolio-image.webp" class="portfolio-img" 
       alt="Description of image" src="/assets/images/placeholder.webp">
  <div class="portfolio-overlay">
    <h3 class="portfolio-title">Project Title</h3>
    <p class="portfolio-category">Category</p>
  </div>
</a>
```

### Section Structure

Standard section:

```html
<section id="section-id" class="section">
  <div class="container">
    <div class="section-header fade-in">
      <h2>Section Title</h2>
      <p>Section description text</p>
    </div>
    
    <!-- Section content goes here -->
  </div>
</section>
```

## Updating Content

### Text Content

To update text content, locate the corresponding section in the Nunjucks templates (`.njk` files) and modify the text within the HTML tags.

For page metadata (title, description):
1. Locate the frontmatter at the top of the page file (between `---` markers)
2. Update the `title` and `description` values

### Images

When replacing images:
1. Use WebP format for optimal performance
2. Place images in the `/src/assets/images/` directory
3. Maintain the same filenames as the original images or update references in HTML
4. Include descriptive alt text for accessibility

## Adding New Portfolio Items

To add a new portfolio item:

1. Add your new portfolio image (WebP format) to `/src/assets/images/`
2. Open `/src/index.njk`
3. Locate the `.portfolio-grid` section
4. Copy an existing portfolio item structure and update:
   - Link URL: `href="/case-study-X"`
   - Image path: `data-src="/assets/images/your-new-image.webp"`
   - Alt text: `alt="Descriptive text about the project"`
   - Project title: `<h3 class="portfolio-title">Project Name</h3>`
   - Category: `<p class="portfolio-category">Category Name</p>`

Example:

```html
<a href="/case-study-7" class="portfolio-item fade-in">
  <img data-src="/assets/images/portfolio-7.webp" class="portfolio-img" 
       alt="Description of the project" src="/assets/images/placeholder.webp">
  <div class="portfolio-overlay">
    <h3 class="portfolio-title">Project Name</h3>
    <p class="portfolio-category">Category</p>
  </div>
</a>
```

## Adding New Services

To add a new service:

1. Open `/src/index.njk`
2. Locate the `.services-grid` section
3. Copy an existing service card structure and update:
   - Icon SVG: Replace path data in the `<svg>` element
   - Title: Update the `<h3>` content
   - Description: Update the `<p>` content

Example:

```html
<div class="service-card fade-in">
  <svg class="service-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <!-- Your SVG path data -->
  </svg>
  <h3>New Service</h3>
  <p>Description of the new service.</p>
</div>
```

## SEO Guidelines

When updating content, maintain these SEO best practices:

1. **Page Titles**: Keep them concise and include relevant keywords
2. **Meta Descriptions**: Write compelling descriptions under 160 characters
3. **Headings**: Maintain proper hierarchy (H1 → H2 → H3)
4. **Alt Text**: Provide descriptive alt text for all images
5. **Internal Links**: Use descriptive anchor text for internal links
6. **Page Speed**: Optimize images (use WebP format) and minimize unnecessary code

To update meta tags:
1. Edit the frontmatter at the top of `.njk` files:
```
---
title: Your Page Title
description: Your page description here
---
``` 
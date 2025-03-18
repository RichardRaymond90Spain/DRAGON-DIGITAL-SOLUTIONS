const htmlmin = require('html-minifier');
const CleanCSS = require('clean-css');
const { minify } = require('terser');

module.exports = function(eleventyConfig) {
  // Copy asset folders to the output
  eleventyConfig.addPassthroughCopy('./src/assets/images');
  eleventyConfig.addPassthroughCopy('./src/assets/js');
  eleventyConfig.addPassthroughCopy('./src/assets/css');

  // Minify CSS
  eleventyConfig.addFilter('cssmin', function(code) {
    if (!code) return '';
    return new CleanCSS({}).minify(code).styles;
  });

  // Minify JS
  eleventyConfig.addNunjucksAsyncFilter('jsmin', async function(code, callback) {
    if (!code) {
      callback(null, '');
      return;
    }
    
    try {
      const minified = await minify(code);
      callback(null, minified.code);
    } catch (err) {
      console.error('Terser error: ', err);
      callback(null, code);
    }
  });

  // Minify HTML output
  eleventyConfig.addTransform('htmlmin', function(content, outputPath) {
    if(outputPath && outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: 'src',
      output: 'dist',
      includes: '_includes'
    },
    templateFormats: ['njk', 'md', 'html'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk'
  };
}; 
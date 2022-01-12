const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("src/formCheck.js");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
      layouts: "_includes/layouts",
    },
  };
};
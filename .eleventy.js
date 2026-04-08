#!/usr/bin/env node

const eleventy = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  // --- Global Configuration ---
  eleventyConfig.addNunjucksFilter("slug", function(item, prefix = false) {
    let str = String(item);
    return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  });

  // --- Build Process ---
  eleventyConfig.addGlobalData("siteTitle", "Your Name");
  eleventyConfig.addGlobalData("siteBaseUrl", "https://amatthews91.github.io/");

  // --- Input/Output Directories ---
  eleventyConfig.setDirname("./");
  eleventyConfig.setTemplateFormats(["njk", "md"]);

  // --- Collection Setup ---
  eleventyConfig.addCollection("blog", (api) => {
    const posts = api.getFilteredByGlob("(_posts/*.md)").map(item => {
      return {
        ...item.data, // Includes title, date, excerpt, etc.
        path: item.inputPath,
        contentHtml: item.content // The raw markdown content
      };
    });
    // Sort posts by date, newest first
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  });
}
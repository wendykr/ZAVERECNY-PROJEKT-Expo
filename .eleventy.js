module.exports = function(eleventyConfig) {

	// Výchozí výstupní složka: _site

	// Zkopírovat images/ do _site/images
	eleventyConfig.addPassthroughCopy("images");

	// Zkopírovat css/ to _site/css/
	eleventyConfig.addPassthroughCopy("css");

	// Zkopírovat css/ to _site/js/
	eleventyConfig.addPassthroughCopy("js");

  // Úplná URL adresa
  eleventyConfig.addGlobalData("rootURL", "https://expo-pce.netlify.app");

  return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md", "liquid"],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }

};

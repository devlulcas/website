const autoprefixer = require('autoprefixer');
const postcssNesting = require('postcss-nesting');

const config = {
	plugins: [autoprefixer, postcssNesting]
};

module.exports = config;

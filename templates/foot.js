const { html, safeHtml } = require('common-tags')

/**
 * 
 * @param {string} title html <title> tag content
 * @param {string|string[]} styles stylesheets url
 * @param {string} [desc] description for meta
 * @param {string} [author='Taink'] author for meta
 * @param  {...string} [keywords=['']] 
 */
function getFoot() {
    return html`
</body>
</html>`
}
module.exports = getFoot;

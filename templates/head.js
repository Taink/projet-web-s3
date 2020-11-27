const { html, safeHtml } = require('common-tags')

/**
 * 
 * @param {string} title html <title> tag content
 * @param {string|string[]} styles stylesheets url
 * @param {string} [desc] description for meta
 * @param {string} [author='Taink'] author for meta
 * @param  {...string} [keywords] meta keywords
 */
function getHead(title, styles, desc='', author='Taink', ...keywords) {
    getStyleTag = style => `<link rel="stylesheet" href="${style}">`;
    return html`
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${desc | ''}">
    <meta name="author" content="${author}">
    <meta name="keywords" content="${Array.isArray(keywords) ? keywords.join(', ') : ''}">

    <!-- Stylesheets -->
    ${
        Array.isArray(styles)
        ? styles.map(getStyleTag)
        : getStyleTag(styles)

    }

    <title>${title}</title>
</head>
<body>`
}
module.exports = getHead;

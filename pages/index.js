const { html, safeHtml } = require('common-tags');

function getContent() {
	return html`
		${require('../templates/head')(
			'Hello World!',
			'css/styles.css',
			'This is a new website!'
		)}
		<h1>Hello! Great website here!</h1>
		<p>
			If you would like to, you could register on this website you know...
		</p>
		<a href="/register">New ? Register here !</a>
		<a href="/login">Log in here !</a>
		${require('../templates/foot')()}
	`;
}

module.exports = getContent;

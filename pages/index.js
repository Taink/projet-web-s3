const { html, safeHtml } = require('common-tags');

function getContent() {
	return html`
		${require('../templates/head')(
			'Hello World!',
			'css/styles.css',
			'This is a new website!'
		)}
		<h1>Hello! Welcome to Velux!</h1>
		<p>
			If you would like to, you could register on this website you know...
		</p>
		<nav>
			<a href="/login">Log in here if you're already registered!</a>
			<a href="/register">New? Register here!</a>
		</nav>
		${require('../templates/foot')()}
	`;
}

module.exports = getContent;

const { html, safeHtml } = require('common-tags');

function getContent(regError = '') {
	return html`
		${require('../templates/head')(
			'Velux - Register',
			['css/styles.css', 'css/form.css'],
			'Velux registration page'
		)}
		<h1>Welcome to <a href="/">Velux</a></h1>
		<h3>Please register here</h3>

		<nav>
			<a href="/login">Log in here if you're already registered!</a>
		</nav>

		${regError
			? html`
					<p class="form-error">
						There was an error while registering your account:
						${safeHtml(regError)}
					</p>
			  `
			: ''}
		${require('../templates/forms/register')()}
		${require('../templates/foot')()}
	`;
}

module.exports = getContent;

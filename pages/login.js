const { html, safeHtml } = require('common-tags');

function getContent(logError = '', successReg = '') {
	return html`
		${require('../templates/head')(
			'Velux - Login',
			['css/styles.css', 'css/form.css'],
			'Login page for Velux'
		)}
		<h1>Welcome back to <a href="/">Velux</a></h1>
		<h3>Please login here</h3>

		<nav>
			<a href="/register">New? Register here!</a>
		</nav>

		${logError
			? safeHtml`
					<p class="form-error">
						There was an error while logging in your account:
						${logError}
					</p>
			  `
			: ''}
		${successReg
			? safeHtml`<p class="form-success">
					Yey! You registered! You can now login through this form!
			  </p>`
			: ''}
		${require('../templates/forms/login')()}
		${require('../templates/foot')()}
	`;
}

module.exports = getContent;

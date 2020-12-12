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

    ${
		logError
			? html`
					<p class="form-error">
						There was an error while logging in your account:
						${safeHtml(logError)}
					</p>
			  `
			: ''
	}
    ${
		successReg
			? html`<p class="form-success">
					Yey! You registered! You can now login through this form!
			  </p>`
			: ''
	}

    <form action="/login" method="post">
        <div class="form-body">
            <div class="form-el">
                <label for "Username"><b>Username</b></label>
                <input type="text" placeholder="Your username" name="Username" id="Username" required>
            </div>
            <div class="form-el">
                <label for "Password"><b>Password</b></label>
                <input type="password" placeholder="Your password" name="Password" id="Password" required>
            </div>
        </div>
        <div class="form-sep"></div>
        <div class="form-foot">
            <button type="submit" class="registerButton">Confirmer</button>
        </div>
    </form>

${require('../templates/foot')()}
`;
}

module.exports = getContent;

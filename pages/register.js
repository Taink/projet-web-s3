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

    ${
		regError
			? html`
					<p class="form-error">
						There was an error while registering your account:
						${safeHtml(regError)}
					</p>
			  `
			: ''
	}

    <form action="/register" method="post">
        <div class="form-body">
            <div class="form-el">
                <label for "Username"><b>Username</b></label>
                <input type="text" placeholder="Your username" name="Username" id="Username" required>
            </div>
            <div class="form-el">
                <label for "Password"><b>Password</b></label>
                <input type="password" placeholder="Your password" name="Password" id="Password" required>
            </div>

            <div class="form-el">
                <label for "RepPassword"><b>Confirm Password</b></label>
            <input type="password" placeholder="Confirm password" name="RepPassword" id="RepPassword" required>
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

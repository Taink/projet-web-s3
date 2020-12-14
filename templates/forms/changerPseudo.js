const { html } = require("common-tags");

function getContent() {
	return html`
	<form action="/option/pseudo" method="POST">
		<div class="form-body">
			<div class="form-el">
				<label for="NewUsername"><b>New Username</b></label>
				<input type="text" placeholder="Your new Username" name="NewUsername" id="NewUsername" required>
			</div>
		</div>
		<div class="form-sep"></div>
		<div class="form-foot">
			<button type="submit" class="registerButton">Confirmer</button>
		</div>
	</form>
	`;
}

module.exports = getContent;

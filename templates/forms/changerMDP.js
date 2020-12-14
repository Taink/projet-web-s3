const { html } = require("common-tags");

function getContent() {
	return html`
	<form action="/option/pass" method="POST">
		<div class="form-body">
			<div class="form-el">
				<label for="oldpassord"><b>Old Password</b></label>
				<input type="password" placeholder="Your old password" name="OldPassword" id="OldPassword" required>
			</div>
			<div class="form-el">
				<label for="NewPassword"><b>New Password</b></label>
				<input type="password" placeholder="Your new password" name="NewPassword" id="NewPassword" required>
			</div>

			<div class="form-el">
				<label for="RepPassword"><b>Confirm Password</b></label>
			<input type="password" placeholder="Confirm password" name="RepPassword" id="RepPassword" required>
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

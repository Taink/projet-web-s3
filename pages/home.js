const { html, safeHtml } = require('common-tags');

function getContent(username = '') {
	return html`
		${require('../templates/head')(
			'velux - homepage',
			'css/styles.css',
			'Velux user home page'
		)}

		<h1>Welcome back${' ' + username || ''}!</h1>

		<p>You can get bored all the time you want on this website :)</p>

		<p onclick="showAlert()">Clic here for a surprise :)</p>

		<nav>
			<a href="/index">Log out</a>
			<a href="/option">Account option</a>
		</nav>

		<script>
			function showAlert() {
				alert('Still nothing here');
			}
		</script>
		${require('../templates/foot')()}
	`;
}

module.exports = getContent;

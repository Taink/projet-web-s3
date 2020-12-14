const { html, safeHtml } = require('common-tags');

function getContent(username = '', password = '') {
	return html`
    ${require('../templates/head')(
		'velux - options',
		['css/styles.css', 'css/form.css', 'css/options.css'],
		'Velux user options'
	)}
      
	<h1>Options</h1>
	<p>Here you can modify your password and username</p>
	<div id="boutonPseudo" onclick="bascule('changerPseudo');">Modify Username</div>
	<div id="boutonMDP" onclick="bascule('changerMDP');">Modify Password</div>
	<button type="button">Delete Account</button> 
	<div id="options">
		${require('../templates/forms/changerPseudo')}
		${require('../templates/forms/changerMDP')}
	</div>

	<nav>
	<a href="/index">Log out</a>
	<a href="/home">return homepage</a>
		</nav>

	<script>
	function bascule(id){
	if (document.getElementById(id).style.visibility == "hidden")
		document.getElementById(id).style.visibility = "visible"; 
	else	
		document.getElementById(id).style.visibility = "hidden"; 
	}
	</script>

	${require('../templates/foot')()}
    `;
}

module.exports = getContent;

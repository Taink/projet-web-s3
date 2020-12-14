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
	<div id="options">
		${require('../templates/forms/changerPseudo')}
		${require('../templates/forms/changerMDP')}
	</div>
  <button onclick ="sure()" id="ButtonDelete" type="button">Delete Account</button> 
  
	<nav>
	<a href="/index">Log out</a>
	<a href="/home">return homepage</a>
	</nav>

	<script>
	function sure(){
    if(confirm("Are you sure ?")){
      //delete account
      console.log('Account deleted');
    } else{
      //cancel action
      console.log("The account was not deleted");
    }
  }
	</script>

	${require('../templates/foot')()}
    `;
}

module.exports = getContent;

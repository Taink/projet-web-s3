const { html, safeHtml } = require('common-tags');

function getContent(username =''){
  return html`
    ${require('../templates/head')(
      'velux - homepage',
      'css/styles.css',
      'Velux user home page'
    )}
      <script>
      function initElement()
      {
        let p = document.getElementById("onClic");
        p.onclick = showAlert;
      }
      function showAlert()
      {
        alert("Still nothing here");
      }
      </script>

      <h1>Welcome back 
      ${
        username
          ? safeHtml`
            <p class="form-error"
              There was an error while printing your username :
              ${username}
              </p>
            `
          : ''
      }
      ! </h1>


      <p>You can get bored all the time you want on this website :)</p>

      <p id="onClic">Clic here for a surprise :)</p>

      <nav>
      <a href="/index">Log out</a>
      <a href="/option">Account option</a>
		  </nav>



    ${require('../templates/foot')()}
    `;
}

module.exports = getContent;
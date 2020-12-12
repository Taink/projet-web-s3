const { html, safeHtml } = require('common-tags');

function getContent(username ='', password =''){
  return html`
    ${require('../templates/head')(
      'velux - options',
      'css/styles.css',
      'Velux user options'
    )}
      <script>
      function bascule(id){
        if (document.getElementById(id).style.visibility == "hidden")
          document.getElementById(id).style.visibility = "visible"; 
        else	
          document.getElementById(id).style.visibility = "hidden"; 
      }
      </script>
      <h1>Options</h1>
      <p>Here you can modify your password and username</p>
      <div id="boutonPseudo" onclick="bascule('changerPseudo');">Modify Username</div>
      <div id="boutonMDP" onclick="bascule('changerMDP');">Modify Password</div>
      <div id="changerPseudo>
          <form action="" method="">
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
      </div>
      <div id="changerMDP">
        <form action="" method="post">
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
      </div>
      
      <nav>
      <a href="/index">Log out</a>
      <a href="/home">return homepage</a>
		  </nav>



    ${require('../templates/foot')()}
    `;
}

module.exports = getContent;
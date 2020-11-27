const { html, safeHtml } = require('common-tags')


function getContent() {
    return html`
${require('../templates/head')(
    'Hello World!',
    'css/styles.css',
    'This is a new website!'
)}
    <form action="/register" method="post">
        <div class="Formulaire">
            <h1>Welcome on the Velux Engine</h1>
            <h3>Please register here</h3>

            <label for "Username"><b>Username</b></label>
            <input type="text" placeholder="Enter username" name="Username" id="Username" required>

            <label for "Password"><b>Password</b></label>
            <input type="password" placeholder="Enter password" name="Password" id="Password" required>

            <label for "RepPassword"><b>Confirm Password</b></label>
            <input type="password" placeholder="Confirm password" name="RepPassword" id="RepPassword" required>

            <button type="submit" class="registerButton">Confirmer</button>
        </div>
    </form>
${require('../templates/foot')(

)}
`
}

module.exports = getContent;

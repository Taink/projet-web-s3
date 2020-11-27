const { html, safeHtml } = require('common-tags')


function getContent() {
    return html`
${require('../templates/head')(
    'Hello World!',
    'css/styles.css',
    'This is a new website!'
)}

    <form action="/login" method="post">
        <div class="Formulaire">
            <h1>Welcome back on the Velux Engine</h1>
            <h3>Please login here</h3>

            <label for "Username"><b>Username</b></label>
            <input type="text" placeholder="Your username" name="Username" id="Username" required>

            <label for "Password"><b>Username</b></label>
            <input type="password" placeholder="Your password" name="Password" id="Password" required>

            <button type="submit" class="registerButton">Confirmer</button>
        </div>
    </form>

${require('../templates/foot')(

)}
`
}

module.exports = getContent;

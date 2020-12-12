const { html } = require("common-tags");

function getContent() {
    return html`
    <form action="/login" method="post">
        <div class="form-body">
            <div class="form-el">
                <label for="Username"><b>Username</b></label>
                <input type="text" placeholder="Your username" name="Username" id="Username" required>
            </div>
            <div class="form-el">
                <label for="Password"><b>Password</b></label>
                <input type="password" placeholder="Your password" name="Password" id="Password" required>
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

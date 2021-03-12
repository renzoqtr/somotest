const Page = require('./page');

class LoginPage extends Page {

    get inputUsername () { return $('#username') }
    get inputPassword () { return $('#password') }
    get btnLogin () { return $('button.radius') }

    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnLogin.click();
    }

    clickOnLoginButton () {
        this.btnLogin.click();
    }

    open () {
        return super.open('login');
    }

    refresh () {
        super.refresh();
    }
}

module.exports = new LoginPage();

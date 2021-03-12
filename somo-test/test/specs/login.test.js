const LoginPage = require('../pageobjects/login.page');
const NotificationPage = require('../pageobjects/notification.page');

describe('Login Page Verification', () => {

    it('should login with valid credentials', () => {
        LoginPage.open();
        LoginPage.login('tomsmith', 'SuperSecretPassword!');
        expect(NotificationPage.flashAlert).toBeExisting();
        expect(NotificationPage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
        LoginPage.refresh();
    });

    it('should not login with invalid credentials', () => {
        LoginPage.open();
        LoginPage.login('wrongUser', 'wrongPassword!');
        expect(NotificationPage.flashAlert).toBeExisting();
        expect(NotificationPage.flashAlert).toHaveTextContaining(
            'Your username is invalid!');
        LoginPage.refresh();
    });

   it('should login without username and password', () => {
        LoginPage.open();
        LoginPage.clickOnLoginButton();
        expect(NotificationPage.flashAlert).toBeExisting();
        expect(NotificationPage.flashAlert).toHaveTextContaining(
            'Your username is invalid!');
        LoginPage.refresh();
    });

});



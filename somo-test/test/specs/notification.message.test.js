const NotificationMessagePage = require('../pageobjects/notification.message.page');
const NotificationPage = require('../pageobjects/notification.page');

describe('Notification Message Verification', () => {

    it('action successful message should be shown', () => {
        NotificationMessagePage.open();
        NotificationMessagePage.clickLink();
        expect(NotificationPage.flashAlert).toBeExisting();
        while(!NotificationPage.flashAlert.getText().includes('Action successful')) {
            NotificationMessagePage.clickLink();
        }
        expect(NotificationPage.flashAlert).toHaveTextContaining(
            'Action successful');
    });

});

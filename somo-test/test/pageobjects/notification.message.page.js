const Page = require('./page');

class NotificationMessagePage extends Page {

    get clickHere () { return $('a[href*="notification_message"]') }

    clickLink() {
        this.clickHere.click();
    }

    open () {
        super.open('notification_message_rendered');
    }

}

module.exports = new NotificationMessagePage();
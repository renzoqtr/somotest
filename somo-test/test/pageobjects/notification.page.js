const Page = require('./page');

class NotificationPage extends Page {

    get flashAlert () { return $('#flash') }
}

module.exports = new NotificationPage();

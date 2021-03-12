const Page = require('./page');

class IframePage extends Page {

    get textArea () { return $('#tinymce') }
    get iframe () { return $('#mce_0_ifr') }

    writeOnTextArea (text) {
        super.switchToFrame(this.iframe);
        this.textArea.setValue(text);
    }

    open () {
        return super.open('iframe');
    }

}

module.exports = new IframePage();
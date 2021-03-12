const IframePage = require('../pageobjects/iframe.page');

describe('Iframe Page Verification', () => {

    it('should be able to write on text area', () => {
        IframePage.open();
        IframePage.writeOnTextArea('test');
        expect(IframePage.textArea).toBeExisting();
        expect(IframePage.textArea).toHaveTextContaining('test');
    });

});

const AddRemovePage = require('../pageobjects/add.remove.page');

describe('Add Remove Page Verification', () => {

    it('should be able to add and delete an Element', () => {
        AddRemovePage.open();
        AddRemovePage.addElement();
        expect(AddRemovePage.remove).toBeExisting();
        AddRemovePage.removeElement();
        expect(AddRemovePage.remove).not.toBeExisting();
        AddRemovePage.refresh();
    });

    it('should be able to add and delete multiple Element', () => {
            AddRemovePage.open();
            for (times = 7 ; times > 0 ; times--) {
                AddRemovePage.addElement();
            }
            expect(AddRemovePage.allRemove.length).toBe(7);
            for (times = 7 ; times > 0 ; times--) {
                AddRemovePage.removeElement();
            }
            expect(AddRemovePage.remove).not.toBeExisting();
        });

});

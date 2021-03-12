const Page = require('./page');

class AddRemovePage extends Page {

    get add () { return $('button=Add Element') }
    get remove () { return $('button=Delete') }
    get allRemove () { return $$('button=Delete') }

    addElement () {
       this.add.click();
    }

    removeElement () {
       this.remove.click();
    }

    open () {
        return super.open('add_remove_elements/');
    }

    refresh () {
        super.refresh();
    }
}

module.exports = new AddRemovePage();

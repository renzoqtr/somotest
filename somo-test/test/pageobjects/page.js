module.exports = class Page {

    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    refresh () {
        browser.refresh()
    }

    switchToFrame (frameId) {
        browser.switchToFrame(frameId)
    }

}

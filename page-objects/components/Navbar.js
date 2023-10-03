import {Selector, t} from 'testcafe'


export default class Navbar {
    constructor(){
        // Selectors
        this.signInButton = Selector('#signin_button')
        this.searchInput = Selector('#searchTerm')
        this.feedbackButton = Selector('#feedback')
    }

    async search(text){
        await t
            .typeText(this.searchInput, text, {paste: true, replace: true})
            .pressKey('enter')
    }
}

import {Selector, t} from 'testcafe'

export default class SearchResultsPage {
    constructor(){
        // Selectors
        this.text = Selector("h2")
        this.link = Selector("div")
    }
}

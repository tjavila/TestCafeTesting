import {Selector, t} from 'testcafe'
import BasePage from './BasePage'

export default class Feedback extends BasePage {
    constructor(){
        // Selectors
        super()
        this.nameInput = Selector('#name')
        this.emailInput = Selector('#email')
        this.subjectInput = Selector('#subject')
        this.commentInput = Selector('#comment')
        //this.submitButton = Selector('.btn-primary')
        this.submitButton = Selector("input").withAttribute("value", "Send Message")
        this.message = Selector("div")
    }
    async fillForm(name, email, subject, comment){
        await t
            .typeText(this.nameInput, name, {paste: true})
            .typeText(this.emailInput, email, {paste: true})
            .typeText(this.subjectInput, subject, {paste: true})
            .typeText(this.commentInput, comment, {paste: true})
            .click(this.submitButton)
    }
}


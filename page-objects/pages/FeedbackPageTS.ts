import {Selector, t} from 'testcafe'

export default class FeedbackPage {
        formName: Selector = Selector('#name')
        formEmail: Selector = Selector('#email')
        formSubject: Selector = Selector('#subject')
        formComment: Selector = Selector('#comment')
        formSubmitButton: Selector = Selector("input").withAttribute("value", "Send Message")
        formMessage: Selector = Selector("div")
        feedbackButton: Selector = Selector('#feedback')
    
        async submitForm(t: TestController, name, email, subject, comment){
            await t
                .typeText(this.formName, name, {paste: true})
                .typeText(this.formEmail, email, {paste: true})
                .typeText(this.formSubject, subject, {paste: true})
                .typeText(this.formComment, comment, {paste: true})
                .click(this.formSubmitButton)
    }
}


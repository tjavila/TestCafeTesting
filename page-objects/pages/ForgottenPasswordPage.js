import {Selector, t} from 'testcafe'

export default class ForgottenPassword {
    constructor(){
        this.emailInput = Selector('#user_email')
        this.message = Selector('div')
    }
}

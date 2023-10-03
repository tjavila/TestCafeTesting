import {Selector, t} from 'testcafe'

export default class Login {
    constructor(){
        this.loginForm = Selector('#login_form')
        this.userLogin = Selector('#user_login')
        this.passwordInput = Selector('#user_password')
        this.submitButton = Selector('.btn-primary')
        this.errorAlert = Selector('.alert-error')
        this.linkToPassword = Selector("a").withText('Forgot your password ?')
        this.accountSummary = Selector('#account_summary_tab')
        this.userIcon = Selector('.icon-user')
        this.logout = Selector('#logout_link')
    }
    async login(username, password){
        await t
            .typeText('#user_login', username, {paste: true, replace: true})
            .typeText('#user_password', password, {paste: true, replace: true})
            .click('.btn-primary') 
    }
}
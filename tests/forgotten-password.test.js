import { Selector } from "testcafe";
import Navbar from "../page-objects/components/Navbar";
import Login from "../page-objects/pages/LoginPage";
import ForgottenPassword from "../page-objects/pages/ForgottenPasswordPage";

const navbar = new Navbar()
const login = new Login()
const forgottenPassword = new ForgottenPassword()

// prettier-ignore
fixture `Send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`

test("User can request new password to be send to his email", async t => {

    await t
        .click(navbar.signInButton)
        .click(login.linkToPassword)
        .typeText(forgottenPassword.emailInput, "abc@abc.com", {
            paste: true, 
            replace:true
        })
        .pressKey('enter')
        .expect(forgottenPassword.message.innerText).contains('Your password will be sent to the following email: abc@abc.com')
        .expect(forgottenPassword.emailInput.exists).notOk()
})
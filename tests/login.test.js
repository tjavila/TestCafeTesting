import { Selector } from "testcafe";
import Login from "../page-objects/pages/LoginPage";
import Navbar from "../page-objects/components/Navbar";
const login = new Login()
const navbar = new Navbar()

// prettier-ignore
fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`


test("User cannot login with invalid credentials", async t => {
    await t.click(navbar.signInButton)
    login.login('invalid name', 'invalid password')
    await t.expect(login.errorAlert.innerText).contains("Login and/or password are wrong.")
})

test.skip("User can login into application", async t => {
    await t.click(navbar.signInButton)
    login.login('username', 'password')
    await t.wait(5000)
    await t.navigateTo('http://zero.webappsecurity.com/bank/account-summary.html')
    // await t.expect(accountSummary.exists).ok()
    // await t.expect(loginForm.exists).notOk()
    // await t.click(userIcon)
    // await t.click(logout)
    // await t.expect(signInButton.exists).ok()
    // await t.expect(logout.exists).notOk()
})


import { Selector } from "testcafe";
import Navbar from "../page-objects/components/Navbar";
import FeedbackPage from "../page-objects/pages/FeedbackPageTS";

const navbar = new Navbar()
const feedback = new FeedbackPage()

// prettier-ignore
fixture `Send feedback form test`
    .page `http://zero.webappsecurity.com/index.html`

test("User can send feedback form", async t => {

    //Actionss
    await t.click(Selector('#feedback'))
    feedback.submitForm(t,'Tayssa','abc@abc.com','Error','Something wrong')
    await t.expect(feedback.formMessage.innerText).contains('Thank you for your comments, Tayssa. They will be reviewed by our Customer Service staff and given the full attention that they deserve.')
})
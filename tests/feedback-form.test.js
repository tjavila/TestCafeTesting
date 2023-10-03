import { Selector } from "testcafe";
import Navbar from "../page-objects/components/Navbar";
import Feedback from "../page-objects/pages/FeedbackPage";

const navbar = new Navbar()
const feedback = new Feedback()

// prettier-ignore
fixture `Send feedback form test`
    .page `http://zero.webappsecurity.com/index.html`

test.only("User can send feedback form", async t => {

    //Actionss
    await t.click(navbar.feedbackButton)
    feedback.fillForm('Tayssa','abc@abc.com','Error','Something wrong')
    feedback.waitFor(4000)
    await t.expect(feedback.message.innerText).contains('Thank you for your comments, Tayssa. They will be reviewed by our Customer Service staff and given the full attention that they deserve.')
})
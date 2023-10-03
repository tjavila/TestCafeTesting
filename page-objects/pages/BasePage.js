import {Selector, t} from 'testcafe'

export default class BasePage {
    async waitFor(milliseconds){
        await t.wait(milliseconds)
    }

    async setTestSpeed(speedLevel){
        await t.setTestSpeed(speedLevel)
    }
}

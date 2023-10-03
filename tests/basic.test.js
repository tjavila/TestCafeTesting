import { Selector } from "testcafe";

// prettier-ignore
fixture.skip `Getting started with TestCafe`
    .page(`https://devexpress.github.io/testcafe/example/`)
    .before(async t => {
        //Test setup goes here
        //await run DataBaseReset()
        //await SeedTestData()
    })
    .beforeEach(async t =>{
        //Runs before each test
        await t.setTestSpeed(1)
        //await t.setPageLoadTimeout(0)
    })
    .after(async t =>{
        //Cleaning test data
        //Logging and sending data 
        //Loggout
    })
    .afterEach(async t =>{
        //Runs after each test
    })


test.skip.timeouts({pageLoadTimeout: 5000, // Defina o timeout desejado aqui (em milissegundos)
  })('My first TestCafe test', async t => {
    const name_input =  Selector('#developer-name')
    const submit_button = Selector('#submit-button')
    const articleText = Selector('#article-header').innerText

    //await t.takeScreenshot({fullPage: true})
    //await t.takeElementScreenshot(submit_button)
    await t.typeText(name_input, "João Silva")
    //await t.wait(3000)
    await t.click(submit_button)
    // classes usa ponto, id usa #
    await t.expect(articleText).contains('João Silva')
})

test.skip('My first TestCafe test 2', async t => {
  const name_input =  Selector('#developer-name')
  const submit_button = Selector('#submit-button')
  const articleText = Selector('#article-header').innerText
  //only executa só 1, skipe skipa o que tiver marcado
  //await t.takeScreenshot({fullPage: true})
  //await t.takeElementScreenshot(submit_button)
  await t.typeText(name_input, "João Silva")
  //await t.wait(3000)
  await t.click(submit_button)
  // classes usa ponto, id usa #
  await t.expect(articleText).contains('João Silva')

  // Functions
  // Click
  // await t.click('selector, {options})
  // Double click
  // await t.doubleClick('selector, {options})
  // right click
  // await t.rightClick('selector, {options})
  // drag element
  // await t.drag('selector', 200, 0, {options})
  // Hover
  // await t.hover('selector', {options})
  // Select text
  // await t.selectText('selector', {options})
  // type text
  // await t.typeText(name_input, "João Silva", {options})
  // Press key on keyboard
  // await t.pressKey('key')
  // Navigate
  // await t.navigateTo('url')
  // Take screenshot
  // await t.takeScreenshot({fullPage: true})
  // await t.takeElementScreenshot(submit_button)
  // resize window
  // await t.resizeWindow(800, 600)

  //Assertions
  // Deep Equal
  // await t.expect("foo").eql("foo", "message", options)
  // Not Deep Equal
  // await t.expect("foo").notEql("foo", "message", options)
  // OK
  // await t.expect("foo").ok()
  // Not OK
  // await t.expect("foo").notOk()
  // Contais
  // await t.expect(articleText).contains('João Silva')
  // Not Contais
  // await t.expect(articleText).notContains('João Silva')
  // Greater or Less than
  // await t.expect(10).gt(10) false
  // await t.expect(10).gte(10) true
  // await t.expect(10).lt(10) false
  // await t.expect(10).lte(10) true
  // Within
  // await t.expect(10).within(1,100)
  // Not within
  // await t.expect(101).notWithin(1,100)

})
// selenium browser automation in js 

const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    try{
    // navigate to url 
    await driver.get('https://www.google.com');

    // enter text "cheese" and perform keyboard action "enter"
    await driver.findElement('By.name('q')).sendKeys('naruto', Key.ENTER);

    let firstResult = await driver.wait(until.elementLocated(By.css('h3')), 10000);
    console.log(await firstResult.getAttribute('textContext'));
    }
    finally{ driver.quit()};
})();

console.log('its fine !');
const chromium = require('chrome-aws-lambda');

module.exports = async (req, res) => {
    let browser = await chromium.puppeteer.launch();
    let page = await browser.newPage();

    await page.goto('https://www.iconfinder.com');

    let image = await page.screenshot();

    console.log(image);

    res.setHeader('content-type', 'image/png');
    res.send();
}
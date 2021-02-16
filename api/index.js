const browserless = require('browserless')()

module.exports = async (req, res) => {
    // Default settings
    const defaults = {
        ignoreHTTPSErrors: true,
        args: ['--disable-gpu', '--single-process', '--no-zygote', '--no-sandbox', '--hide-scrollbars']
    }

    // Request settings
    let settings = {
        device: 'iPhone 12'
    }

    // The requested URL
    const { url = 'http://google.com' } = req.query

    // Take the screenshot
    const buffer = await browserless.screenshot(url, {...defaults, ...settings})

    res.setHeader('content-type', 'image/png');
    res.send(buffer)
}
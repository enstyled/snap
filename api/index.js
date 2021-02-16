const browserless = require('browserless')()

module.exports = async (req, res) => {
    // Default settings
    const defaults = {
        ignoreHTTPSErrors: true,
        args: ['--disable-gpu', '--single-process', '--no-zygote', '--no-sandbox', '--hide-scrollbars']
    }

    // Request settings
    let settings = {
        viewport: {
            deviceScaleFactor: 2
        }
    }

    // The requested URL
    const { url } = req.query

    if (url) {
        settings.hide = ['#banner-carbonads']
        settings.overlay = {
            browser: 'dark',
            background: 'linear-gradient(45deg, #38C190 0%, #19916B 100%)'
        }
    } else {
        settings.html = require('../template.html')
        settings.viewport.width = 420
        settings.viewport.height = 280
    }

    // Take the screenshot
    const buffer = await browserless.screenshot(url, {...defaults, ...settings})

    res.setHeader('content-type', 'image/png');
    res.send(buffer)
}
const browserless = require('browserless')()

module.exports = async (req, res) => {
    // Default settings
    const defaults = {
        ignoreHTTPSErrors: true,
        args: ['--disable-gpu', '--single-process', '--no-zygote', '--no-sandbox', '--hide-scrollbars']
    }

    // Request settings
    let settings = {
        hide: ['#banner-carbonads'],
        overlay: {
            browser: 'dark',
            background: 'linear-gradient(45deg, #38C190 0%, #19916B 100%)'
        }
    }

    // The requested URL
    const { url = 'http://google.com' } = req.query

    // Take the screenshot
    const buffer = await browserless.screenshot(url, {...defaults, ...settings})

    res.setHeader('content-type', 'image/png');
    res.send(buffer)
}
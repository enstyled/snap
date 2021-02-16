const browserless = require('browserless')({
    ignoreHTTPSErrors: true,
    args: ['--disable-gpu', '--single-process', '--no-zygote', '--no-sandbox', '--hide-scrollbars']
})

module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.send(`Hello ${name}!`)
}
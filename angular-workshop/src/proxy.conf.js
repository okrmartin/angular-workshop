const PROXY_CONF = [{
  context: [
    '/user',
    '/info'
  ],
  target:'https://gateway.marvel.com:443',
  secure:false
}]

module.exports = PROXY_CONF;
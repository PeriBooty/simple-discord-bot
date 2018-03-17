const alphabet = require('../lib/alphabetMap.json')

module.exports = {
  getInfo: function () {
    var info = {
      'name': 'bigtxt'
    }
    return info
  },
  command: function (msg, params) {
    const exp = /[^a-z .]/gi
    params = params.replace(exp, '').toLowerCase()
    var chars = params.split('')
    var mapped = chars.map(char => {
      if (char === ' ') {
        return ' '
      } else if (char === '.') {
        return '\n'
      } else {
        return alphabet[char]
      }
    })
    msg.channel.send(mapped.join(' '))
  }
}
const childProcess = require('child_process')

module.exports = {
  getInfo: function () {
    var info = {
      'name': 'eval',
      'permissionLevel': 'owner'
    }
    return info
  },
  command: function (msg, params) {
    var out = ''
    try {
      out = childProcess.execSync(params).toString()
    } catch (e) {
      out = e
    }

    if (out.length > 1900) {
      out = out.substring(0, 1900)
    }

    msg.channel.send('In:\n```zsh\n' + params + '\n```\nOut:\n```\n' + out + '\n```')
    msg.delete()
  }
}

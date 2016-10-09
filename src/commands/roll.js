let Roll = require('roll')
let roll = new Roll()

module.exports = function (bot) {
  return function (msg, pattern) {
    let operation = pattern[2]
    let result = roll.roll(operation)
    let rolled = result.rolled
    let frase = 'Rolled: ' + rolled + ' <b>Total: ' + result.result + '</b>'
    bot.sendMessage(msg.chat.id, frase, { parse_mode: 'HTML' })
  }
}

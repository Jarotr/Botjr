let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
*Group jarot 📮: https://chat.whatsapp.com/E5l0ofPuMxG3H8ZhMRyI7e*
`.trim()
conn.sendButton(m.chat, str, `© jarotbotz`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['jarot']
handler.tags = ['info']
handler.command = /^jarot$/i

module.exports = handler

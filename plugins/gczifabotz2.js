let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.botwm
let str = `
*Group jarotbotz2 📮: https://chat.whatsapp.com/EQ2R3O3ckPkJZrs1MhCtQp
`.trim()
conn.sendButton(m.chat, str, `©jarotbotz`, `⋮☰ Menu`, `.menu`, m)
}
handler.help = ['jarot2']
handler.tags = ['info']
handler.command = /^jarot2$/i

module.exports = handler

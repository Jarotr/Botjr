let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭═══════════════════════
║╭──❉ 〔 ⳹ ❋ཻུ۪۪𝙅𝘼𝙎𝘼 𝙍𝙐𝙉⳹ ❋ཻུ۪۪ 〕 ❉────── 
║│➸ • *JASA RUN*           
║│ *LANGSUNG KE*
║│ *OWNER*
╰─────────❉
📮 𝗣𝗶𝗻𝗻𝗲𝗱 :
│ *_CARI SC SENDIRI_*
_____••••••••• 
⬣━〔Store By Jarot〕━⬣
▌│█║▌║▌║║▌║▌║█│▌`.trim()
  const button = {
        buttonText: '↱ 🄺🄻🄸🄺 🅂🄸🄽🄸 ↲',
        description: kontol,
        sections:  [{title: "STORE JAROT", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'nomor JAROT', description: "kalau mau run silahkan cht jarot", rowId:".ownerjarot"},
        {title: 'RULES', description: "rules jarotbotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(run|runbotjarot)$/i
handler.help = ['rules']
module.exports = handler

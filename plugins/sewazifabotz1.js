let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭═══════════════════════
║╭──❉ 〔 ⳹ ❋ཻུ۪۪SEWA JAROTBOTZ⳹ ❋ཻུ۪۪ 〕 ❉────── 
║│➸ • *sewa jarotbotz*          
║│ *LANGSUNG KE*
║│ *OWNER*
╰─────────❉
📮 𝗣𝗶𝗻𝗻𝗲𝗱 :
│ *_Tolong jangan dispam_*
_____••••••••• 
⬣━〔Store By Jarot〕━⬣
▌│█║▌║▌║║▌║▌║█│▌`.trim()
  const button = {
        buttonText: '↱ 🄺🄻🄸🄺 🅂🄸🄽🄸 ↲',
        description: kontol,
        sections:  [{title: "STORE SEWA", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'nomor owner jarot', description: "kalau mau sewa silahkan cht owner jarotbotz", rowId:".sewazif"},
        {title: 'RULES', description: "rules jarotbotz", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(sewazifabotz1|botz1)$/i
handler.help = ['sewazifabotz1']
module.exports = handler

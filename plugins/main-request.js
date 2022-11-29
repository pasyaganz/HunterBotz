

const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text, usedPrefix, command}) => {
    if (!text) return conn.reply(m.chat, `Silahkan masukan laporan kamu\n\nContoh: ${usedPrefix + command} Lapor pengguna mengirim foto bokep tolong di tindak.`, m)
    if (text > 300) return conn.reply(m.chat, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', m)
    var nomor = m.sender
    const teks1 = `*[ 𝗥𝗲𝗾𝘂𝗲𝘀𝘁 ]*\nNomor : wa.me/${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${text}`
    conn.reply('6281361281833@s.whatsapp.net', teks1, m)
    conn.reply(m.chat, '✔️ Masalah berhasil dikirimkan ke Owner', m)
}
handler.help = ['request <fitur>']
handler.tags = ['main']
handler.command = /^(req|request|reqq)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.limit = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

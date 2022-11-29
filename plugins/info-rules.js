let handler = async (m, { conn }) => {
bear = "Source Code"
let esce = `text nya `
conn.sendButtonImg(m.chat, fla + 'Rules', esce, wm2, 'Menu', '.menu', m) 
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i

module.exports = handler
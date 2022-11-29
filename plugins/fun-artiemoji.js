
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
  let type = (args[0] || '').toLowerCase()
  let isAll = false
  let isUser = false
  
  switch (type) {
    case '😁':
     m.reply(`Emoji yang menggambarkan mood positif. Memberikan kesan tertawa yang nakal, bersemangat, dan sedikit malu.`)
      break
    case '😂':
      m.reply(`Emoji ini menggambarkan seseorang sedang tertawa sampai keluar air mata. Menertawakan sesuatu yang sangat lucu dan menggelitik.`)
      break
    case '😇':
      m.reply(`Emoji ini mengungkapkan perasaan bersyukur dengan manis. Lebih mengarah pada perasaan mirip malaikat dan setelah melakukan perbuatan yang baik.`)
      break
    case '😊':
      m.reply(`Emoji ini menggambarkan perasaan sukacita yang benar-benar tulus dan tidak dibuat-buat.`)
      break
    case '☺':
      m.reply(`Emoji ini digunakan untuk menggambarkan kegembiraan dan sedang dalam suasana hati yang baik.`)
      break
    case '🥹':
      m.reply(`Emoji yang ingin menuturkan perasaan haru sampai ingin meneteskan air mata. Bisa diartikan dengan perasaan memohon dengan sungguh-sungguh.`)
      break
    case '😚':
      m.reply(`Emoji yang digunakan sebagai ucapan terima kasih pada teman, keluarga, dan orang terkasih. Bentuk tip atas bantuan yang sudah diberikan.`)
      break
    case '🏃':
      m.reply(`Emoji yang menggambarkan seseorang sedang berolahraga. Bisa juga ekspresi kabur dari masalah atau pembicaraan yang menakutkan dan membosankan.`)
      break
    case '🙅':
      m.reply(`Emoji ini memiliki arti ketidaksetujuan. Bisa juga berarti seseorang meminta lawan bicara menghentikan sesuatu secepatnya.`)
      break
    default:
      if (!/[01]/.test(command)) throw `
┌〔 Daftar Emoji Yg Tersedia 〕
😁
🙅
🏃
😚
😊
😃
😄
contoh:
${usedPrefix}artiemoji 😁
`.trim()
      throw false
  }
}

handler.help = ['artiemoji <emoji>']
handler.tags = ['fun']
handler.command = /^(artiemoji)$/i
module.exports = handler

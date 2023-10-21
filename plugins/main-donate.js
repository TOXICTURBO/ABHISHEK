
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
Share Toxic-Alexa_V4 Bot Link And Support. Git Link https://github.com/TURBOHYPER`
let img = 'https://avatars.githubusercontent.com/u/97358745?v=4'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler

let handler = async (m, { conn }) => {
const ftroli = {
    key : {
    remoteJid: '6285850539404-1614953337@g.us',
    participant : '0@s.whatsapp.net'
    },
    message: {
    orderMessage: {
    itemCount : 2022,
    status: 1,
    surface : 1,
    message: 'LiST PRICE JOIN GROUP', 
    orderTitle: `oscarbotz`,
    thumbnail: 'https://telegra.ph/file/3c83bc5fa0cbcdc6a1e75.jpg', 
    sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
	conn.reply(m.chat, price1, ftroli)
}

handler.help = ['sewa', 'sewabot']
handler.tags = ['info']
handler.command = /^(sewa|sewabot)?$/i

module.exports = handler

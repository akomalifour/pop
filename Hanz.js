/*NOTE KALO RENAME YG WAJAR AJA KONTOL
RECORD SESUKAMU KALO EROR JANGAN TANYA/SALAHKAN AKU
LU SENDIRI YG RECORD MASA GW YG SALAH KALO ADA GK BAKAL GW BALES CHAT NYA

MY SOSMED

Github : github.com/HARISGANZ

Instagram : wong_koclok_

You Tube : HANZ々OFC彡

Tiktok : Alay kontol


*/
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { help } = require('./media/help')
const { removeBackgroundFromImageFile } = require('remove.bg')
const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const setting = JSON.parse(fs.readFileSync('./media/setting.json'))
const scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
}
const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}
const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
owner = setting.OwnerNumber
botname = setting.BotName
lolkey = setting.lolKey
hanzkey = setting.hanzKey
ownername = setting.OwnerName
creator = 'ԋαɳȥ々σϝƈ' 
recode = 'ԋαɳȥ々σϝƈ' 
publik = true //self/public
asutes = 'BOT HANZ OFC[🔥]' //Runtime
module.exports = Hanz = async (Hanz, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''		
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)		
		const arg = budy.slice(command.length + 2, budy.length)	
		const q = args.join(' ')		
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = Hanz.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6283144394823@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await Hanz.chats.all()
		const groupMetadata = isGroup ? await Hanz.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? Hanz.user.jid : Hanz.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? Hanz.user.name : conts.notify || conts.vname || conts.name || '-'
        
        
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe

		mess = {
	    wait: 'Sabar Bang/neng Lagi Proses',
		success: 'Done',
		error: {
		stick: 'Gagal❕',
	    Iv: 'Linknya Error !'
		},
		only: {
		admin: 'Kusus Admin!',
		group: 'Khusus Di Group!'
	    }
		}
		faketeks = 'Hanz'
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            Hanz.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            Hanz.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? Hanz.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : Hanz.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const zero = fs.readFileSync ('./media/Hanz.jpg')
        const costum = (pesan, tipe, target, target2) => {
			Hanz.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
		//Runtime
		const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                         //WAKTU UCAPAN                      
case 0: jamss = "Jangan gadang kak"; break;
  case 1: jamss = "Jangan gadang kak"; break;
     case 2: jamss = "Jangan gadang kak"; break;
        case 3: jamss = "Jangan gadang kak"; break;
            case 4: jamss = "Sholat subuh kak"; break;
               case 5: jamss = "Selamat pagi"; break;
                 case 6: jamss = "Selamat pagi"; break;
                    case 7: jamss = "Selamat pagi"; break;
                       case 8: jamss = "Selamat pagi"; break;
                          case 9: jamss = "Selamat pagi"; break;
                             case 10: jamss = "Selamat pagi"; break;
                               case 11: jamss = "Selamat siang"; break;
                                 case 12: jamss = "sholat Zuhur kak"; break;//GABUT🗿
                              case 13: jamss = "Selamat siang"; break;
                           case 14: jamss = "Selamat sore"; break;
                        case 15: jamss = "sholat Ashar kak"; break;
                     case 16: jamss = "Selamat sore"; break;
                  case 17: jamss = "Selamat sore"; break;
               case 18: jamss = "Selamat malam"; break;
            case 19: jamss = "sholat Isya kak"; break;
         case 20: jamss = "Selamat malam"; break;
      case 21: jamss = "Selamat malam"; break;
   case 22: jamss = "Selamat malam"; break;
case 23: jamss = "Selamat malam"; break;
}
//SLOT GAME
var tampilUcapan = "" + jamss;
const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍇 : 🍇','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
const sotoy2 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
const sotoy1 = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔',		'🍐 : 🍒 : 🍋','🍊 : 🍒 : 🍒','?? : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇']
const sotoy3 = ['🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌']
const buruh1 = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐚']
const buruh2 = ['🐔','🦃','🐿','🐐','🐏','🐖','🐑','🐎','🐺','🦩']
const buruh3 = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
const buruh11 = buruh1[Math.floor(Math.random() * (buruh1.length))]
const buruh22 = buruh2[Math.floor(Math.random() * (buruh2.length))]
const buruh33 = buruh3[Math.floor(Math.random() * (buruh3.length))]        
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//
 //FAKE REPLY
const replyy = (teks) => {
Hanz.sendMessage(from, teks, text, { quoted: mek, contextInfo: { externalAdReply: { title: `${botname}`, body: 'By : Haris Gans', sourceUrl: `https://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw`, thumbnail: fs.readFileSync('./media/thumnail.jpg') }}})
}             
//BUTTON LOKASI              
const sendButtonLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await Hanz.prepareMessage(from, kma, location,{ waitForAck: true })
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
Hanz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//BUTTON TEXT
const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
Hanz.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: ftrol
})
}         
//BUTTON FOTO
const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await Hanz.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
Hanz.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
                contexInfo: adyt
            })
        }        
const adyt = { 
"title": `Hallo ${pushname}`,
"body": `hy`, 
"mediaType": "2", 
"mediaUrl": "https://youtu.be/ilrhJV_QMIE", 
"thumbnail": fs.readFileSync('./media/Hanz.jpg')
}
const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}
const addRegisteredUser = (userid, sender, age, time, serials) => {
const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}
const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

//BUTTON DAFTAR/VERIFY
const isRegistered = checkRegisteredUser(sender)

const sendButRegis = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
Hanz.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};

const daftar1 = `Hai kak  ${pushname} ${tampilUcapan} \n\nSebeum Menggunakan Bot ${botname} Harap Daftarkan Diri dengan klik Button Verify di bawah ini!`
const daftar2 = 'SUBSCRIBE LINK DI BAWAH INI❕\nhttps://youtube.com/channel/UCfhWUHl7dskRCVlyDMxnQbw'
const daftar3 = [{buttonId: `${prefix}verify`,buttonText: {displayText: `VERIFY㋡`,},type: 1,},]

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
//~~~~~~~~~~~~~~~~~~~~~[ WADERFAK MEN ]~~~~~~~~~~~~~~~~~~~~~//
//FAKE STATUS
const fakestatus = (teks) => {
Hanz.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": faketeks,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fs.readFileSync('./media/thumnail.jpg'),
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}
}
}
})
}       
//FAKE TROLI       
const ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 2022,
status: 1,
surface : 1,
message: `ʜᴀɴᴢ々ᴏꜰᴄ`, 
orderTitle: `ʜᴀɴᴢ々ᴏꜰᴄ`,
thumbnail: Hanz, //Gambarnye
sellerJid: '0@s.whatsapp.net' 
}
}
}
//FAKE LOKASi                   
const floc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
liveLocationMessage: {
caption: `${tampilUcapan} ${pushname}`,
jpegThumbnail: Hanz
}
}
}
//FAKE DOKUMEN                     
const fdoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${tampilUcapan} ${pushname}`, 
jpegThumbnail: Hanz
}
}
}           
//============================(BATES)===============================
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        Hanz.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    Hanz.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
Hanz.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
Hanz.groupRemove(from, [sender])
}     
                      



		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		if (!publik) {
		if (!isOwner && !mek.key.fromMe) return
		}
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))      	
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))      	

//MENU

switch (command) {
case 'menu':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
	teks =
`
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║║╣╚╣═╣║║║║║║╣
╚══╩═╩═╩═╩═╩╩╩╩═╝

❏INFO BOT❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱ 
┣💫Nama Bot : ${botname}
┣💫Nama Owner : ${ownername}
┣💫Nomor Owner : ${owner}
┣💫Creator : ${creator}
┣💫Prefix : Multi
┣💫Runtime : ${runtime(process.uptime())}
┗━━⊱
❏INFO USER❏
┏━━⊱ 
┣💫Nama User : ${pushname}
┣💫Nomer User : ${sender.split("@")[0]}
┗━━⊱
❏TO DAY❏
┏━━⊱ 
┣💫${tampilUcapan}
┣💫Jam : ${time}
┗━━⊱
`
gam = fs.readFileSync('./media/thumnail.jpg')
but = [{buttonId: `${prefix}command`, buttonText: { displayText: '⎙ MENU' }, type: 1 },{buttonId: `${prefix}sewa`, buttonText: { displayText: '📜SEWABOT' }, type: 1 },]
sendButImage(from, teks, `${help(prefix)}`, gam, but)        
break 
//====================MENU LIST===================
 case 'command':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": `\`\`\`Hi ${pushname} 👋.\`\`\``,
"description": `▬▭▬▭▬▭▬▭▬▬▭▬▭▬\nSUBSCRIBE\nhttps://youtube.com/HANZ々OFC彡\nSUBSCRIBE AND LIKE\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
"buttonText": " MENU️",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `Silahkan Pilih Gan`,
    "rows": [ 
       {
           "title": "✌ANIME",
           "rowId": `${prefix}animemenu`
           },
	       {
           "title": "👥GROUP MENU",
           "rowId": `${prefix}groupmenu`
           },
	       {
           "title": "🎶MUSIK",
           "rowId": `${prefix}musik`
           },
	       {
           "title": "📌RANDOM",
           "rowId": `${prefix}randommenu`
           },
	       {
           "title": "📩DOWNLOAD",
           "rowId": `${prefix}donlotmenu`
           },
	       {
           "title": "🏸SEARCH",
           "rowId": `${prefix}searchmenu`
           },
	       {
           "title": "🎗STALK",
           "rowId": `${prefix}stalkmenu`
           },
	       {
	       
           "title": "🔮PRIMBON",
           "rowId": `${prefix}primbonmenu`
           },
	       {
           "title": "📸STICKER",
           "rowId": `${prefix}stickermenu`
           },
	       {
           "title": "👤OWNER",
           "rowId": `${prefix}ownermenu`
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
 case 'musik':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": 'MENU MUSIK 🔊\nBY : HANZ々OFC彡',
"description": `▬▭▬▭▬▭▬▭▬▬▭▬▭▬\nSUBSCRIBE\nhttps://youtube.com/HANZ々OFC彡\nSUBSCRIBE AND LIKE\n▬▭▬▭▬▭▬▭▬▬▭▬▭▬`,
"buttonText": "MENU️",
"listType": "SINGLE_SELECT",
"sections": [
{
"title": `Silahkan Pilih Musik yg enak Gan`,
    "rows": [ 
       {
           "title": "🎶 SOUND1",
           "rowId": `${prefix}sound1`
           },
	       {
           "title": "🎶 SOUND2",
           "rowId": `${prefix}sound2`
           },
	       {
           "title": "🎶 SOUND3",
           "rowId": `${prefix}sound3`
           },
	       {
           "title": "🎶 SOUND4",
           "rowId": `${prefix}sound4`
           },
	       {
           "title": "🎶 SOUND5",
           "rowId": `${prefix}sound5`
           },
	       {
           "title": "🎶 SOUND6",
           "rowId": `${prefix}sound6`
           },
	       {
           "title": "🎶 SOUND7",
           "rowId": `${prefix}sound7`
           },
	       {
           "title": "🎶 SOUND8",
           "rowId": `${prefix}sound8`
           },
	       {
           "title": "🎶 SOUND9",
           "rowId": `${prefix}sound9`
           },
	       {
           "title": "🎶 SOUND10",
           "rowId": `${prefix}sound10`
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
//======================MENU BUTTON LOKASI COK==================
case 'groupmenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU GROUP\`\`\` 」
├────────────────────
│◦➛${prefix}antilink
◦➛${prefix}antivirtex
│◦➛${prefix}welcome
│◦➛${prefix}group
│◦➛${prefix}linkgroup
│◦➛${prefix}promote
│◦➛${prefix}demote
│◦➛${prefix}tagall
│◦➛${prefix}hidetag
│◦➛${prefix}totag
│◦➛${prefix}add
│◦➛${prefix}kick
│◦➛${prefix}setpp
│◦➛${prefix}setdesc
│◦➛${prefix}setname
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK👌' }, type: 1 }])
break
case 'animemenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU ANIME\`\`\` 」
├────────────────────
│◦➛${prefix}darkjokes
│◦➛${prefix}manga
│◦➛${prefix}character
│◦➛${prefix}anime
│◦➛${prefix}kusonimesearch
│◦➛${prefix}otakudesusearch
│◦➛${prefix}hentaisearch
│◦➛${prefix}nekopoisearch
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'randommenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU RANDOM\`\`\` 」
├────────────────────
│◦➛${prefix}ssweb
│◦➛${prefix}detikvn
│◦➛${prefix}detikvideo
│◦➛${prefix}randomdarkjokes
│◦➛${prefix}randommemeindo
│◦➛${prefix}kodenuklir
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'donlotmenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU DOWNLOAD\`\`\` 」
├────────────────────
│◦➛${prefix}play
│◦➛${prefix}ytsearch
│◦➛${prefix}ytmp4
│◦➛${prefix}tiktok
│◦➛${prefix}tiktokaudio
│◦➛${prefix}ttaudio
│◦➛${prefix}pinterest
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'searchmenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU SEARCH\`\`\` 」
├────────────────────
│◦➛${prefix}gimage
│◦➛${prefix}playstore
│◦➛${prefix}wallpapersearch
│◦➛${prefix}shopee
│◦➛${prefix}google
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'primbonmenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU PRIMBON\`\`\` 」
├────────────────────
│◦➛${prefix}artinama
│◦➛${prefix}jodoh
│◦➛${prefix}jadian
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'stalkmenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU STALK\`\`\` 」
├────────────────────
│◦➛${prefix}stalkig
│◦➛${prefix}stalktiktok
│◦➛${prefix}stalkgithub
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'stickermenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU STICKER\`\`\` 」
├────────────────────
│◦➛${prefix}attp
│◦➛${prefix}sticker
│◦➛${prefix}toimg
│◦➛${prefix}tomp3
│◦➛${prefix}tovideo
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
case 'ownermenu':
        sendButtonLocation(from, 
        `❏ 「 \`\`\`MENU OWNER\`\`\` 」
├────────────────────
│◦➛${prefix}upswtexs
│◦➛${prefix}upswsticker
│◦➛${prefix}upswgif
│◦➛${prefix}upswlokasi
│◦➛${prefix}upswimage
│◦➛${prefix}upswvideo
│◦➛${prefix}upswaudio
│◦➛${prefix}upswvn
│◦➛${prefix}tobc
│◦➛${prefix}bc2
│◦➛${prefix}bc
│◦➛${prefix}owner
│◦➛${prefix}report
└${botname}-`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}gk`, buttonText: { displayText: 'OK' }, type: 1 }])
break
 //━━━━━━━━━━━━━━━[ SOUND MENU COK ]━━━━━━━━━━━━━━━━━//
 case 'sound1':
satu = fs.readFileSync('./media/mp3/sound1.mp3');
Hanz.sendMessage(from, satu, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound2':
dua = fs.readFileSync('./media/mp3/sound2.mp3');
Hanz.sendMessage(from, dua, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound3':
tiga = fs.readFileSync('./media/mp3/sound3.mp3');
Hanz.sendMessage(from, tiga, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound4':
empat = fs.readFileSync('./media/mp3/sound4.mp3');
Hanz.sendMessage(from, empat, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound5':
lima = fs.readFileSync('./media/mp3/sound5.mp3');
Hanz.sendMessage(from, lima, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound6':
enam = fs.readFileSync('./media/mp3/sound6.mp3');
Hanz.sendMessage(from, enam, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound7':
tujuh = fs.readFileSync('./media/mp3/sound7.mp3');
Hanz.sendMessage(from, tujuh, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break	
case 'sound8':
delapan = fs.readFileSync('./media/mp3/sound8.mp3');
Hanz.sendMessage(from, delapan, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound9':
sembilan = fs.readFileSync('./media/mp3/sound9.mp3');
Hanz.sendMessage(from, sembilan, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
case 'sound10':
sepuluh = fs.readFileSync('./media/mp3/sound10.mp3');
Hanz.sendMessage(from, sepuluh, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', duration: 359996400, ptt:true})
break
//=====================TAG MENU==========================
case 'totag':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
				if (!isGroup) return reply(mess.only.group)			
			if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await Hanz.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await Hanz.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            Hanz.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          replyy(`reply gambar/dokumen/gif/sticker/audio/video dengan caption ${prefix}totag`)
        }
        break
case 'infoall': case 'tagall':
									if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply(mess.only.admin)
									if (!isGroup) return reply(mess.only.group)
									var nom = mek.participant
									members_id = []
									teks = ''
									for (let mem of groupMembers) {
										teks += `│ *@${mem.jid.split('@')[0]}*\n`
										members_id.push(mem.jid)
										}
										mentions(`「 *TAG ALL*  」
${q?`\nPesan : `+q:``}
							
${teks}`, members_id, true)
									break
case 'hidetag':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await Hanz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
Hanz.sendMessage(from, options, text)
break									

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'attp':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
Hanz.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'sticker':
case 'stiker':
case 's':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
Hanz.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return reply(' reply stickernya gan')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(' Gagal, pada saat mengkonversi sticker ke gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `Jangan Lupa Subscribe Zero YT7`)
fs.unlinkSync(ran)
})
break
case 'tomp3':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
Hanz.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await Hanz.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
Hanz.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await Hanz.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
Hanz.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done... Jangan Lupa Subscribe Zero YT7' })
fs.unlinkSync(ran)
})
break
//================UP SW KHUSUS OWNER==========
case 'upswteks':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    Hanz.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
                    if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    Hanz.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${ownername}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                    case 'upswsticker':                    
                    if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                     if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvn':            
					if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')	       
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						Hanz.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await Hanz.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    Hanz.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Hanz.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    Hanz.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':                       
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await Hanz.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    Hanz.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    replyy(`Sukses upload image:\n${teksyy}`)
                        break        
//=================BC==============
case 'tobc':				
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')					
				Hanz.updatePresence(from, Presence.composing)
					anu = await groupMembers
					if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(Arya).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo :mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Hanz.sendMessage(_.jid, buff, audio, { quoted: ftrol })
						}
						} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await Hanz.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							Hanz.sendMessage(_.jid, buff, sticker, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true}})
							}
							} else{
          replyy('reply sticker/audio')
							}
					break
					case 'bc2':
      case 'bc':
if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')      
             if (args.length < 1) return reply('teks?')
             anu = await Hanz.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await Hanz.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             Hanz.sendMessage(_.jid, bc, image, {quoted:ftrol,caption: `*『 Haris 』*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
Hanz.sendMessage(_.jid, 
			{"contentText": `*『 Haris Broadcast 💫 』*\n\n${body.slice(4)}`,
			"footerText": 'HANZ々OFC彡💫',
			"buttons": [
			{"buttonId": `#command`,
			"buttonText": {"displayText": "📙 MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             replyy('Suksess broadcast')
}
             break                   
//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//
case 'addcmd': 
case 'setcmd':
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan :  cmdnya dan tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
replyy("Done Bwang")
} else {
replyy('tag stickenya')
}
break
// Del Cmd ( HW MODS WA )
case 'delcmd':
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(scommand))
replyy("Done Bwang")
break
case 'listcmd':
let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
let cemde = [];
for (let i of scommand) {
cemde.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
}
replyy(teksnyee)
break
case 'restart':
if (!isOwner && !mek.key.fromMe) return reply(mess.only.ownerB)
reply(`_Restarting ${botname}_`)
exec(`cd &&  node index`)
sleep(4000)
replyy('Sukses')
break		
case 'owner':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: Creator ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
Hanz.sendMessage(from, {displayName: `Creator ${ownername}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('TUHH NOMER OWNER KU')
break
case 'bc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('.......')
anu = await Hanz.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bc = await Hanz.downloadMediaMessage(encmedia)
for (let _ of anu) {
Hanz.sendMessage(_.jid, bc, image, { caption: `[ Izin Broadcast ]\n\n${body.slice(4)}` })
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `[ *BOT BROADCAST* ]\n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'report':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
const teks1 = `*[REPORT]*\nNomor : @${nomor.split("@s.whatsapp.net")[0]}\nPesan : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
Hanz.sendMessage(`6285157740529@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
//━━━━━━━━━━━━━━━[ FITUR DOWNLOAD ]━━━━━━━━━━━━━━━━━//

case 'play':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `❖ Title    : *${result.title}*\n`
caption += `❖ Size     : *${result.size}*`
ini_buffer = await getBuffer(result.thumbnail)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(result.link)
await Hanz.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftrol })
})
})
break
case 'ytsearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break
case 'ytmp4':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkey}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await Hanz.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'tiktok':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await Hanz.sendMessage(from, ini_buffer, video, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
case 'ttaudio': 
case 'tiktokmusic': 
case 'tiktokaudio':
reply(mess.wait)
if (args.length == 0) return reply(`Example: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${Hanzkey}&url=${ini_link}`)
Hanz.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: mek })
break			
case 'detikvn':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
mediam = await Hanz.downloadAndSaveMediaMessage(encmediam)
cokmatane = Number(args[0])
hah = fs.readFileSync(mediam)
Hanz.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
fs.unlinkSync(mediam)
break
case 'detikvideo':
encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
median = await Hanz.downloadAndSaveMediaMessage(encmedian)
cokmatane = Number(args[0])
hah = fs.readFileSync(median)
Hanz.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
fs.unlinkSync(median)
break           
case 'pinterest':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
break
//━━━━━━━━━━━━━━━[ FITUR ANIME ]━━━━━━━━━━━━━━━━━//
case 'darkjokes':
if (isBanned) return reply(mess.only.benned)
reply(`Wait bwang...`)
anu = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`, {method: 'get'})
tekss = `Wow Lucu Banget😱`
trans = `${footertext}`
but = [
          { buttonId: `${prefix}darkjokes`, buttonText: { displayText: '🔖 Next' }, type: 1 },
          { buttonId: `${prefix}donasi`, buttonText: { displayText: '💰 Donasi' }, type: 1 }
        ]
        sendButImage(from, tekss, trans, buff, but)
break
// ke 75
case 'ssweb':
if (args.length < 1) return reply(`Gini, ${prefix + command} https://github.com/KamiKaze2325/ScBot`)
wbny = body.slice(7)
reply(`✍️Tunggu....`)
anu = await getBuffer(`https://api.lolhuman.xyz/api/ssweb?apikey=${lolkey}&url=${wbny}`)
weem = `✍️${botname}`
Hanz.sendMessage(from, anu, image, {quoted: mek, caption: weem})
break
case 'character':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await Hanz.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'manga':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await Hanz.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'anime':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await Hanz.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'kusonimesearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Seasons : ${get_result.seasons}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Total Episode : ${get_result.total_episode}\n`
ini_txt += `Score : ${get_result.score}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Released On : ${get_result.released_on}\n`
ini_txt += `Desc : ${get_result.desc}\n`
link_dl = get_result.link_dl
for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
ini_buffer = await getBuffer(get_result.thumbnail)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'otakudesusearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Judul : ${get_result.judul}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Episode : ${get_result.episodes}\n`
ini_txt += `Aired : ${get_result.aired}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Genre : ${get_result.genres}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Studios : ${get_result.status}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Credit : ${get_result.credit}\n`
get_link = get_result.link_dl
for (var x in get_link) {
ini_txt += `\n\n*${get_link[x].title}*\n`
for (var y in get_link[x].link_dl) {
ini_info = get_link[x].link_dl[y]
ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
ini_txt += `\`\`\`Link : \`\`\`\n`
down_link = ini_info.link_dl
for (var z in down_link) {
ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
reply(ini_txt)
break
case 'hentaisearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = "Result : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
reply(ini_txt)
break
case 'nekopoisearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR SEARCH ]━━━━━━━━━━━━━━━━━//

case 'gimage':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${query}`)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'wallpapersearch':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await Hanz.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'playstore':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Aplikasinya Mana Tod\nContoh: ${prefix + command} tiktok`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Play Store Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.title}\n`
ini_txt += `ID : ${x.appId}\n`
ini_txt += `Developer : ${x.developer}\n`
ini_txt += `Link : ${x.url}\n`
ini_txt += `Price : ${x.priceText}\n`
ini_txt += `Price : ${x.price}\n\n`
}
reply(ini_txt)
break
case 'shopee':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Barang Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} sepatu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Shopee Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.name}\n`
ini_txt += `Terjual : ${x.sold}\n`
ini_txt += `Stock : ${x.stock}\n`
ini_txt += `Lokasi : ${x.shop_loc}\n`
ini_txt += `Link : ${x.link_produk}\n\n`
}
reply(ini_txt)
break
case 'google':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Nama Yg Mau Cari Mana Tod\nContoh: ${prefix + command} sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Google Search : \n'
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Desc : ${x.desc}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR PRIMBON ]━━━━━━━━━━━━━━━━━//

case 'artinama':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Namamya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lolkey}&nama=${ini_nama}`)
reply(get_result.result)
break
case 'jodoh':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero & Sandrinna`)
ini_nama = args.join(" ").split("&")
nama1 = ini_nama[0].trim()
nama2 = ini_nama[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Negative : ${get_result.negatif}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'jadian':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Tanggal Jadiannya Mana Tod\nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break

//==============STALK MENU==============

case 'stalkig':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna_11`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.photo_profile)
ini_txt = `Username : ${ini_result.username}\n`
ini_txt += `Full Name : ${ini_result.fullname}\n`
ini_txt += `Posts : ${ini_result.posts}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
Hanz.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
case 'stalktiktok':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna`)
stalk_toktok = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey=ZeroYT7`)
get_result = get_result.result
ini_txt = `Username : ${get_result.username}\n`
ini_txt += `Nickname : ${get_result.nickname}\n`
ini_txt += `Bio : ${get_result.nickname}\n`
ini_txt += `Followers : ${get_result.followers}\n`
ini_txt += `Followings : ${get_result.followings}\n`
ini_txt += `Likes : ${get_result.likes}\n`
ini_txt += `Video : ${get_result.video}\n`
pp_tt = await getBuffer(get_result.user_picture)
Hanz.sendMessage(from, pp_tt, image, { quoted: ftrol, caption: ini_txt })
break
case 'stalkgithub':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Zero-YT7`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `Name : ${ini_result.name}\n`
ini_txt += `Link : ${ini_result.url}\n`
ini_txt += `Public Repo : ${ini_result.public_repos}\n`
ini_txt += `Public Gists : ${ini_result.public_gists}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
Hanz.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM MEME ]━━━━━━━━━━━━━━━━━//

case 'randommeme':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
Hanz.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
})
break
case 'randomdarkjoke':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
Hanz.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
})
break
case 'randommemeindo':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`).then((gambar) => {
reply(mess.wait)
Hanz.sendMessage(from, gambar, image, {quoted: ftrol, caption: 'Nih Jangan Lupa Subscribe Zero YT7'})
})
break
//==============GROUP MENU=====================
case 'welcome':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
break
case 'antilink' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!geouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
Hanz.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
Hanz.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
linkgc = await Hanz.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
Hanz.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
Hanz.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak menjadi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
Hanz.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
Hanz.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin :)")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
Hanz.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
Hanz.groupRemove(from, mentioned)
}
break
case 'setname':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Hanz.groupUpdateSubject(from, `${body.slice(9)}`)
Hanz.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
Hanz.groupUpdateDescription(from, `${body.slice(9)}`)
Hanz.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await Hanz.downloadAndSaveMediaMessage(mek, './database/media_user')
await Hanz.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break

//=============18+ BOKEP================
//LINK BOKEP DI BAWAH NYA
case 'kodenuklir':
			     try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
				var kodenuk = `Easy Mode :
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
Medium Mode :
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
Hard Mode :
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/
Note : Easy mode = Sange, Biasa Aja, Mental Lemah :v
==============================
Medium Mode = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
Hard Mode = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
Kode nuklir dr milf oneesan ampe gan***** loli
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
[8/6 10.48] +62 812-8025-1698: Happy Mother's Day 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah

Random
 257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554`
				Hanz.sendMessage(from, fcrew, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 0000000000, status: 200, thumbnail: fcrew, surface: 200, message: `${tampilUcapan} ${pushname}\n⎇ ${command}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, caption: kodenuk, contextInfo: { forwardingScore: 508, isForwarded: true}})
				break			
case 'linkbokep':
        sendButtonLocation(from, 
        `[NO VPN]\n➻ *NO VPN1* : bit.ly/2Qn9Qgu\n➻ *NO VPN2* : bit.ly/3gWaBt8\n➻ *XNXX VPN* : bit.ly/3vJZJ7`,
        `Sebelum Comly Siapin sabun/tisu dulu adick²`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}hshdbdhhd`, buttonText: { displayText: 'OK' }, type: 1 },
{ buttonId: `${prefix}hdbdjdhdhd`, buttonText: { displayText: 'Tidak😑' }, type: 1 }])
break                                 
//━━━━━━━━━━━━━━━[ FITUR INFO ]━━━━━━━━━━━━━━━━━//
case 'public':
				if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
			publik = true
				replyy('Sukses mengubah mode self ke public')
			break
			case 'self':
			if (!mek.key.fromMe && !isOwner) return reply('Khusus Owner !!')
				publik = false
				replyy('Sukses mengubah mode public ke self')
			break
case 'sewa1':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": 'GROUP MENU👥',
"description": `LIST SEWA BOT*\n _Hay @${sender.split("@")[0]}_ Ini adalah list sewa bot silahkan pilih`,
"buttonText": "KLIK DISINI",
"listType": "SINGLE_SELECT",
"sections": [
{
    "rows": [ 
       {
           "title": "🕐sewa 1 minggu",
           "rowId": `${prefix}via`
           },
	       {
           "title": "🕑sewa 2 minggu",
           "rowId": `${prefix}via`
           },
	       {
           "title": "🕒sewa 3 minggu",
           "rowId": `${prefix}via`
           },
	       {
           "title": "🕓sewa 1 bulan",
           "rowId": `${prefix}via`
           },
	       {
           "title": "🕔sewa 2 bulan",
           "rowId": `${prefix}via`        
          }  
        ]
      }
    ]
  }
 }, {quoted: floc})
 Hanz.relayWAMessage(res)
 break
case 'info':
        sendButtonLocation(from, 
        `┏━➤ 「 INFO \n┃┃✯ Nama Bot : ${botname} \n┃┃✯ Prefix : Multi\n┃┃✯ Platform : Ubuntu Linux\n┃┃✯ Runtime : ${runtime(process.uptime())}\n┃┃✯ Sc Bot : https://bit.ly/3vRAPnY\n┗━━━━━━━`, 
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}menu`, buttonText: { displayText: 'Ya👌' }, type: 1 },
{ buttonId: `${prefix}donasi`, buttonText: { displayText: 'Donasi' }, type: 1 }])
break        
 case 'sewa':
        sendButtonLocation(from, 
        `*_Hai ${pushname} 👋🏻_* \n\nyakin nih mau sewa bot ? 🤔 Boong auto banned >_<`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 
[{ buttonId: `${prefix}sewa1`, buttonText: { displayText: 'Ya👌' }, type: 1 },
{ buttonId: `${prefix}gk`, buttonText: { displayText: 'Tidak😑' }, type: 1 }])
break                      
case 'via':
        sendButtonLocation(from, 
        `*_Hai ${pushname} 👋🏻_* \nSilakan pilih Mau via apa`,
        `©ԋαɳȥ々σϝƈ`, 
        {jpegThumbnail:fs.readFileSync(`./media/thumnail.jpg`)}, 

[{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
{ buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 },
{ buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 }])
break                
case 'gk':
res = await Hanz.prepareMessageFromContent(from,{
"listMessage": {
"title": 'Cari ☺',
"description": `Emm y udah lah mending main game aja`,
"buttonText": "⋮MULAI️",
"listType": "SINGLE_SELECT",
"sections": [
{
    "rows": [ 
       {
           "title": "Yaudh Donasi aja😊",
           "rowId": `${prefix}donasi`
           },
	       {
           "title": "game aja lah🚶",
           "rowId": `${prefix}slot`     
          }  
        ]
      }
    ]
  }
 }, {quoted: ftrol})
 Hanz.relayWAMessage(res)
 break
case 'gopay':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, "GOPAY : 085157740529 (Mikey)", faketeks, but, mek)
break
case 'dana':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'DONE' }, type: 1 }
]
sendButton(from, "DANA : 08988743499 (Mustakim)", faketeks, but, mek)
break
case "runtime":
case "test":
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break;
case "speed":
case "ping":
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const timestamp = speed();
const latensi = speed() - timestamp;
exec(`neofetch --stdout`, (error, stdout, stderr) => {
const child = stdout.toString("utf-8");
const ssd = child.replace(/Memory:/, "Ram:");
const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`;
reply(pingnya);
});
break;
case 'verify':
const serialUser = createSerial(18)
veri = sender
_registered.push(sender)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
addRegisteredUser(sender, serialUser)
const ara = fs.readFileSync('./media/sticker/verify.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
break
case 'donasi':
teks = `❏INFO BOT❏
▬▭▬▭▬▭▬▭▬▬▭▬▭
┏━━⊱ 
┣PULSA: 083144394823
┣GOPAY: 083144394823
┣DANA: 083144394823
┗━━⊱`
but = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BACK TO MENU' }, type: 1 },
{ buttonId: `${prefix}sewabot`, buttonText: { displayText: 'SEWA BOT' }, type: 1 },
]
sendButton(from, anu, faketeks, but, mek)
break
//━━━━━━━━━━━━━━━[ FITUR MAKER ]━━━━━━━━━━━━━━━━━//

case 'slot':
if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
const somtoy2 = sotoy1[Math.floor(Math.random() * sotoy1.length)]
const somtoy3 = sotoy2[Math.floor(Math.random() * sotoy2.length)]
const somtoy4 = sotoy3[Math.floor(Math.random() * sotoy3.length)]
zeroyt7.sendMessage(from, `
[ SLOTS ]\n-----------------
${somtoy2}
${somtoy}<=====
${somtoy3}
[ SLOTS ]
Keterangan : Jika anda Mendapatkan 3 Buah Sama Berarti Kamu Win
Contoh : ${somtoy4}<=====`, text, { quoted: ftrol })
break


default:
if (budy.includes(`Mastah`)) {
const ara = fs.readFileSync('./media/sticker/mastah.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`mastah`)) {
const ara = fs.readFileSync('./media/sticker/mastah.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`Ajg`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`Assalamualaikum`)) {
const ara = fs.readFileSync('./media/sticker/Assalamualaikum.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }               
if (budy.includes(`assalamualaikum`)) {
const ara = fs.readFileSync('./media/sticker/Assalamualaikum.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }                     
if (budy.includes(`ajg`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`bangsat`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`kntl`)) {
const ara = fs.readFileSync('./media/sticker/toxic.webp');
Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`${owner}`,)) {              
                  const ara = fs.readFileSync('./media/sticker/tag.webp');
                  Hanz.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return Hanz.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
		fin = process.uptime()
        if (!mek.hasNewMessage) return Hanz.setStatus(`Runtime ${runtime(process.uptime())} | prefix ${prefix} | ${asutes}`)
        mek = mek.messages.all()[0]
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
        }
	// console.log(e)
	}
}


	
    

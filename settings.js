const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ['6281327327914']
global.premium = ['6281327327914']
global.youtube = 'https://youtube.com/c/AKIRAYTCHANNEL'
global.ownername = 'ᴹᴿ᭄ AkiraOfcོ ×፝֟͜×'
global.botname ='Hinata-Md'
global.donasi = {
    saweria: 'https://saweria.co/riy20',
    nomor: '081327327914'
}
global.packname = 'ᴹᴿ᭄ AkiraOfcོ ×፝֟͜×'
global.author = 'WhatsApp Bot'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...'
}
global.thumb = fs.readFileSync('./image/hinata.jpg')
global.vn = './sound/menu.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

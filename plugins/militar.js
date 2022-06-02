
import axios from 'axios'

let handler = async(m, { conn, usedPrefix, command }) => {
	
	let girl = (await axios.get(`https://raw.githubusercontent.com/Misael1287/team-fg/main/img/militar.json`)).data
  
//await conn.sendFile(m.chat, pickRandom(girl), 'girl.jpg', ✅ Resultado 🤭', m)
await conn.sendButton(m.chat, '🔹 Militar', 'Click en siguiente para ir a la siguiente imagen', pickRandom(girl), [['SIGUIENTE ➡', `${usedPrefix + command}`]],m)
}
handler.help = ['Militar']
handler.tags = ['img']
handler.command = ['militar', 'militares']
handler.premium = false
handler.limit = true

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


import axios from 'axios'

let handler = async(m, { conn }) => {
	
	let asu = ["asupan", "asupan-la"]
    let asufg = asu[Math.floor(Math.random() * asu.length)]
	
	let asupan = (await axios.get(`https://raw.githubusercontent.com/Misael1287/team-fg/main/img/ucrania.json`)).data
  
await conn.sendFile(m.chat, pickRandom(asupan), 'asupan.mp4', '🔹 El combate belico 🫡', m)
}
handler.help = ['ucrania']
handler.tags = ['main']
handler.command = ['ucrania', 'ukraine']
handler.premium = false
handler.limit = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

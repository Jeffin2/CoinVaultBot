require("dotenv").config();

const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`✅ Logado como ${client.user.tag}`);
});

(async () => {
  try {
    console.log("🔑 TOKEN existe?", !!process.env.TOKEN);
    console.log("🔄 Tentando logar...");
    
    await client.login(process.env.TOKEN);

  } catch (err) {
    console.error("❌ ERRO:", err);
  }
})();
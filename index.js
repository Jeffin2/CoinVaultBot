require("dotenv").config(); // 🔥 sempre no topo

const express = require("express");
const { Client, GatewayIntentBits } = require("discord.js");

const app = express();

// 🌐 Servidor web (necessário pro Render não derrubar)
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("CoinVaultBot online 🚀");
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`🌐 Servidor rodando na porta ${PORT}`);
});

// 🤖 Cliente Discord
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// 🔍 DEBUG GLOBAL
process.on("unhandledRejection", (err) => {
  console.error("❌ ERRO GLOBAL:", err);
});

client.on("error", (err) => {
  console.error("❌ ERRO DO CLIENT:", err);
});

// 🤖 Quando o bot conecta
client.once("ready", () => {
  console.log(`✅ Bot logado como ${client.user.tag}`);
});

// 🚀 LOGIN COM DEBUG FORTE
(async () => {
  try {
    console.log("🔍 Verificando ambiente...");
    console.log("🔑 TOKEN existe?", !!process.env.TOKEN);

    if (!process.env.TOKEN) {
      console.error("❌ TOKEN NÃO DEFINIDO!");
      process.exit(1);
    }

    console.log("🔄 Tentando logar no Discord...");

    await client.login(process.env.TOKEN);

    console.log("✅ LOGIN OK");

  } catch (err) {
    console.error("❌ ERRO AO LOGAR:", err);

    if (err.message?.includes("TOKEN_INVALID")) {
      console.log("👉 Token inválido! Gere outro no Discord Developer Portal.");
    }
  }
})();
require("dotenv").config();

const express = require("express");
const app = express();

// 🔍 DEBUG TOTAL
console.log("===== DEBUG ENV =====");
console.log("process.env:", process.env);
console.log("TOKEN:", process.env.TOKEN);
console.log("TOKEN existe?", !!process.env.TOKEN);
console.log("=====================");

// 🌐 servidor web
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Servidor online 🚀");
});

app.get("/env", (req, res) => {
  res.json({
    hasToken: !!process.env.TOKEN,
    tokenLength: process.env.TOKEN ? process.env.TOKEN.length : 0
  });
});

app.listen(PORT, () => {
  console.log(`🌐 Rodando na porta ${PORT}`);
});
const express = require('express');
const cors = require('cors');
const app = express();

// Permite que o seu Vue (porta 5173) acesse a API
app.use(cors()); 
app.use(express.json());

app.get('/api/dados', (req, res) => {
  res.json({ mensagem: "Conectado ao Backend!" });
});

app.listen(3000, () => console.log("API rodando na porta 3000"));
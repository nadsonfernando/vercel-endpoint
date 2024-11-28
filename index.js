const express = require('express');
const app = express();
const port = 3000;

app.get('/.well-known/apple-app-site-association', (req, res) => {
  const response = {
    applinks: {},
    webcredentials: {
      apps: ["XXXXXXXXXX.YYY.YYYYY.YYYYYYYYYYYYYY"]
    },
    appclips: {}
  };

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(response);
});

app.listen(port, () => {
  console.log(`Servidor rodando em ${port}`);
});
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.sendFile(path.join(__dirname, 'index.html'));
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});

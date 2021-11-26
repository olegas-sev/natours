const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ name: 'Olegas', friend: 'Maram' });
});

app.post('/', (req, res) => {
  res.send('You can post to this url');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening... http://localhost:${3000}`);
});

const app = require('./app');
// Start the server
const port = 3000;

app.listen(port, () => {
  console.log(`Listening... http://localhost:${port}`);
});

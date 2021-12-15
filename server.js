const dotenv = require('dotenv');
const app = require('./app');
// Start the server
const port = process.env.PORT || 3000;

dotenv.config({ path: './config.env' });

app.listen(port, () => {
  console.log(`Listening... http://localhost:${port}`);
});

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
// Start the server
const port = process.env.PORT || 3000;
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB Connection successfull!'));

app.listen(port, () => {
  console.log(`Listening... http://localhost:${port}`);
  console.log(process.env.DATABASE);
});

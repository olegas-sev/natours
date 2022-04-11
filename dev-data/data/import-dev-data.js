const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Tour = require('./../../models/toursModel')

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    // useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection successfull!'))

// Read file
const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours.json`, 'utf-8'))

// Import data into db
const importData = async () => {
  try {
    await Tour.create(tours)
    console.log('Data has been successfully imported into the database')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}

// DELETE all data from db
const deleteData = async () => {
  try {
    await Tour.deleteMany()
    console.log('Data has been successfully deleted')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}
console.log(process.argv)
if (process.argv[2] === '--import') {
  deleteData()
  importData()
} else if (process.argv[2] === '--delete') {
  deleteData()
}

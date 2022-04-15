const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Tour = require('./../../models/toursModel')
const Review = require('./../../models/reviewModel')
const User = require('./../../models/userModel')

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
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'))
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8')
)

// Import data into db
const importData = async () => {
  try {
    console.log(tours[0].name)
    await Tour.create(tours)
    await User.create(users, { validateBeforeSave: false })
    await Review.create(reviews)
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
    await User.deleteMany()
    await Review.deleteMany()
    console.log('Data has been successfully deleted')
  } catch (err) {
    console.log(err)
  }
  process.exit()
}
console.log(process.argv)
if (process.argv[2] === '--import') {
  importData()
} else if (process.argv[2] === '--delete') {
  deleteData()
}

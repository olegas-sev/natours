const fs = require('fs')
const express = require('express');

// Initialize express
const app = express();

// Middleware 
app.use(express.json());

// Read
const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))



const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length, 
    data: {
      tours
    }
  })
}

// Requests
app.get('/api/v1/tours', getAllTours)

app.get('/api/v1/tours/:id', (req, res) => {
  const id = req.params.id * 1
  const tour = tours.find(el => el.id === id)

  if (!tour) {
    return res.status(404).json({
      satus: 'fail',
      message: 'Invalid ID'
    })
  }

  res.status(200).json({
    status: 'success',
    results: tours.length, 
    data: {
      tour
    }
  })

})

app.post('/api/v1/tours', (req, res) => {
  // console.log(req.body);
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({id: newId}, req.body)
  tours.push(newTour)
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
    res.status(201).json({
      status: 'success',
      data: {tour: newTour}
    })
  })
  res.status(200).json('Post req')

})

app.patch('/api/v1/tours/:id', (req, res) => {
  const tour = tours.find(tour => tour.id === req.params.id * 1)

  if (!tour) {
  return res.status(404).json({
    satus: 'fail',
    message: 'Invalid ID'
  })
}


  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>'
    }
  })
})

app.delete('/api/v1/tours/:id', (req, res) => {
  const tour = tours.find(tour => tour.id === req.params.id * 1)

  if (!tour) {
  return res.status(404).json({
    satus: 'fail',
    message: 'Invalid ID'
  })
  }

  res.status(204).json({
    status: 'success',
    data: null
  })
})

const port = 3000;

app.listen(port, () => {
  console.log(`Listening... http://localhost:${3000}`);
});

const fs = require('fs')

const express = require('express');
const app = express();

// Middleware 
app.use(express.json());

// app.get('/', (req, res) => {
//   res.status(200).json({ name: 'Olegas', friend: 'Maram' });
// });

// app.post('/', (req, res) => {
//   res.send('You can post to this url');
// });

const tours = JSON.parse(fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`))

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length, 
    data: {
      tours
    }
  })
})

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


const port = 3000;

app.listen(port, () => {
  console.log(`Listening... http://localhost:${3000}`);
});

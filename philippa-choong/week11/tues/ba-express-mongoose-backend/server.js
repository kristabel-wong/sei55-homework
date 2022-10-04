
const express = require('express');
const app = express();
const PORT = 3000; // process.argv[2] to get from command like

const bodyParser = require("body-parser");
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
// Use this CORS package as part of the Express "middleware stack"
app.use(cors()); // set the CORS allow header for us on every request, for AJAX requests


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT} ...`);
});

// Mongoose DB initialisation
const mongoose = require('mongoose');
const Flight = require('./models/Flight'); // Flight model

mongoose.connect('mongodb://127.0.0.1/ba');
const db = mongoose.connection;

db.on('error', err => {
  console.log('Error connecting to DB server', err);
  process.exit(1);
  // TODO: leave Express server running, but set global error flag
  // and respond to all HTTP requests with an error message automatically
});



// BA API routes

app.get('/', (req, res) => {
  console.log('Root route was requested.');
  res.json({ hello: 'there' });
});

// Index of flights (for debugging): GET /flights
app.get('/flights', async (req, res) => {

  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (err) {
    console.error('Error loading all flights:', err);
    // res.sendStatus( 422 );
    res.status(422).json({ error: 'Db connection error' }); // 'Unprocessable entity' - trigger frontend axios catch()
  }

}); // GET /flights


// Search route: GET /flights/search/:origin/:destination
app.get('/flights/search/:origin/:destination', async (req, res) => {
  // res.json( req.params );

  try {

    const flights = await Flight.find({
      origin: req.params.origin,
      destination: req.params.destination,
    });

    res.json(flights);

  } catch (err) {
    console.error('Error searching flights', req.params, err);
    res.sendStatus(422);
  }

}); //  GET /flights/search/:origin/:destination


// Flight show route: GET /flights/:id
app.get('/flights/:id', async (req, res) => {

  try {

    const flight = await Flight.findOne({ _id: req.params.id });

    const reservations = {};
    // for( const res of flight.reservations ){
    flight.reservations.forEach(res => {
      // console.log('res', res);
      reservations[`${res.row}-${res.col}`] = res.user_id;
    });

    // console.log('reservations', reservations);

    res.send({ flight, reservations });

  } catch (err) {
    // console.log('Error finding flight by ID:', req.params, err);
    res.sendStatus(422);
  }

});

// Reservation booking route: POST /reservations
// TODO: need to tell Express to handle POSTed formdata
//  and then work out how to do a Mongoose query to 
//  find the reservation's flight (by ID), and push
//  a new reservation onto the flight's array of 
//  reservations

app.post('/reservations', async (req, res) => {

  console.log(`req:`, req.body)
  let postdata = req.body
  //code to perform particular action.
  //To access POST variable use req.body()methods.


  const flight = await Flight.findOne({ _id: postdata.flight_id });
  console.log(flight)
  let newReservation = flight.reservations
  newReservation.push({ row: postdata.row, col: postdata.col, user_id: 11 })

  Flight.updateOne(
    { _id: postdata.flight_id },
    { reservations: newReservation },
    (err, updateRes) => {
      if (err) {
        console.log(err)
      }
      else {
        console.log("Updated Docs : ", updateRes);
      }
    }
  )

})
/*
find the flight
get the reservations array
push new reservation to the array
update the flight's reservations with the new updated array
*/
/*
{
    flight_number: 'BA123',
    country: 'Test Junk here', // this will be ignored by default
    origin: 'SYD',
    destination: 'MEL',
    departure_date: new Date('2022-11-20T04:20:00Z'),
    airplane: { name: '737 Max', rows: 20, cols: 6 },
    reservations: [
      { row: 1, col: 1, user_id: 10 },  // NOT real user_ids, just placeholders
      { row: 2, col: 3, user_id: 10 },
      { row: 3, col: 3, user_id: 11 },
    ] // reservations[]
}
*/
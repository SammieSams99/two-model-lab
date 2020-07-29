// setting up require statements
const express = require ('express');
const app = express();
const peopleController = require('./controllers/people.js')
// connecting database with models and server
const mongoose = require('mongoose')

const connectionString = 'mongodb://localhost/home';

mongoose.connect(connectionString, { useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
   });


mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
  });
  
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
  });
  
mongoose.connection.on('error', (err) => {
    console.log('Mongoose error: ', err);
  });

app.use("/people", peopleController)


// setting up index

// setting up homepage/root route 
app.get("/", (request, response) => {
    response.send("Home Page")
})

app.get('/', (request, respond) => {
    respond.render('index.ejs');
});




// setting up listener statement
app.listen(3000, function() {
    console.log("This page works")
})

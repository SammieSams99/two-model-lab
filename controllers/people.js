const express = require('express');
const router = express.Router(); 
const Person = require('../models/people.js');

router.get('/', (request, respond) => {
    Person.find({}, (err, foundPeople)=>{
        respond.render('people/index.ejs', {
            people: foundPeople
        });
    });
});

module.exports = router; 
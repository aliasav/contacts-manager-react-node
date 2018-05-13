/* Contacts related APIs */
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

/* Contact data model schema */
var contactsSchema = mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    imageUrl: String
});

var Contact = mongoose.model('Contact', contactsSchema);

/* GET contacts listing. */
router.get('/list/', function(req, res, next) {
  Contact.find({}).exec(function(error, data) {
    if(!error) {
        res.send(data);
    } else {
        res.status(400).send(error);
    }
  })
});

/* Search contacts */
router.get('/search/:q', function(req, res) {
    var query = req.params.q;
    Contact.find({
        $or:[
            { name: {$regex: query} },
            { phone: {$regex: query} },
            { email: {$regex: query} }
        ]
    }).exec(function(error, data) {
        res.send(data);
    })
})

module.exports = router;

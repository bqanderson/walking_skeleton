var router = require('express').Router();
var mongoose = require('mongoose');
var path = require('path')

mongoose.connect('mongodb://localhost/basic_walking_skeleton');

router.get('/', function(request, response){
  response.sendFile(path.join(__dirname, '../public/views/index.html'));
});

var Cat = mongoose.model('Cat', {name: String});

router.post('/add', function(request, response){
  console.log('Requesting to add a cat with', request.body);
  var kitty = new Cat({name: request.body.name});
  kitty.save(function(err){
    if (err) {
      console.log('meow', err);
    }
    response.send(kitty);
  });
});

router.get('/cats', function(request, response){
  Cat.find({}, function(err, cats){
    if (err) {
      console.log(err);
    }
    response.send(cats);
  });
});

module.exports = router;

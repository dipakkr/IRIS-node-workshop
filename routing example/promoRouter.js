
  var promoRouter = require('express').Router();
  var bodyParser = require('body-parser');

  promoRouter.use(bodyParser.json());

  promoRouter.route('/')
  .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
  })

  .get(function(req,res,next){
          res.end('Will send all the promos to you!');
  })

  .post(function(req, res, next){
      res.end('Will add the promo: ' + 'Promo Name : ' +  req.body.name + 'Promo description : ' + req.body.description);
  })

  .delete(function(req, res, next){
          res.end('Deleting all promo');
  });

   //accessing dish id section

  promoRouter.route('/:id')
  .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
  })

  .get(function(req,res,next){
          res.end('Will send all the promos ' + req.params.id + 'to you' );
  })

  .put(function(req, res, next){
        res.write('Updating the Promo: ' + req.params.dishId + '\n');
    res.end('Will update the Promo: ' + req.body.name +
            ' with details: ' + req.body.description);
})

  .delete(function(req, res, next){
          res.end('Deleting promo : ' + req.params.id);
  });

  module.exports = promoRouter;

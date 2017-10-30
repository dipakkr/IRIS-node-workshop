
  var dishRouter = require('express').Router();
  var bodyParser = require('body-parser');

  dishRouter.use(bodyParser.json());

  dishRouter.route('/')
  .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
  })

  .get(function(req,res,next){
          res.end('Will send all the dishes to you!');
  })

  .post(function(req, res, next){
      res.end('Will add the dish: ' + 'DishName : ' +  req.body.name + 'Dish description : ' + req.body.description);
  })


  .delete(function(req, res, next){
          res.end('Deleting all dishes');
  });

   //accessing dish id section

  dishRouter.route('/:id')
  .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
  })

  .get(function(req,res,next){
          res.end('Will send all the dishes ' + req.params.id + 'to you' );
  })

  .put(function(req, res, next){
        res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name +
            ' with details: ' + req.body.description);
})


  .delete(function(req, res, next){
          res.end('Deleting dishes : ' + req.params.id);
  });

  module.exports = dishRouter;

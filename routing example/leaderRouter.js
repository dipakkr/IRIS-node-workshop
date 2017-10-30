
  var leaderRouter = require('express').Router();
  var bodyParser = require('body-parser');

  leaderRouter.use(bodyParser.json());

  leaderRouter.route('/')
  .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
  })

  .get(function(req,res,next){
          res.end('Will send all the leaders to you!');
  })

  .post(function(req, res, next){
      res.end('Will add the leader: ' + 'Leader Name : ' +  req.body.name + 'Leader description : ' + req.body.description);
  })


  .delete(function(req, res, next){
          res.end('Deleting all leaders');
  });

   //accessing dish id section

  leaderRouter.route('/:id')
  .all(function(req,res,next) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        next();
  })

  .get(function(req,res,next){
          res.end('Will send all the leaders ' + req.params.id + 'to you' );
  })

  .put(function(req, res, next){
        res.write('Updating the Leader: ' + req.params.dishId + '\n');
    res.end('Will update the leader :  ' + req.body.name +
            ' with details: ' + req.body.description);
  })

  .delete(function(req, res, next){
          res.end('Deleting leadership  : ' + req.params.id);
  });

  module.exports = leaderRouter;

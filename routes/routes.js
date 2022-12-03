let express = require('express')// require express library (similar to importing in Python), pulling it into this file

let router = express.Router() //creates router, an object that can match requests to different different paths. Sending them to different functions that are tailored to specific kinds of requests

router.get('/', function(req, res, next){//router.get means configure a route that is a get request, path is a '/'
    res.json({'message': 'Hello.'})
})//function runs to provide a response. req = request, the request the client has made. res = response, response server will send back.

module.exports = router //module.exports means another file may include or require this file and router object

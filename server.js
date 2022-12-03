let express = require('express')

let routes = require('./routes/routes')

let app = express() //creates web app

app.use('/api', routes)// tell app to use created route

let server = app.listen(process.env.PORT || 3000, function(){//"process.env.PORT" means if the PC has a specificed port for use, otherwise use port 3000
    console.log('Express server running on port', server.address().port)
})

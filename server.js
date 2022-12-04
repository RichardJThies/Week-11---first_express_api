let express = require('express')
let routes = require('./routes/routes')
let path = require('path')// tell express server where dist directory is, then serve that directory as a static file

let app = express() //creates web app

let pathToVueApp = path.join(__dirname, 'hello-vue', 'dist')//these 3 lines set up express server to serve vue app code
let vueApp = express.static(pathToVueApp)//variable to represent the Vue app. "pathToVueApp" argument is telling express there are specific files in dist direct to serve as files. ".static" cuz dist doesn't change
app.use('/', vueApp)//user will see vue app as homepage. '/' is a request to serve vue app content

app.use('/api', routes)// tell app to use created route

let server = app.listen(process.env.PORT || 3000, function(){//"process.env.PORT" means if the PC has a specificed port for use, otherwise use port 3000
    console.log('Express server running on port', server.address().port)
})

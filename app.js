 const express = require("express")
 const app = express()
 const PORT = 3000
 app.use(express.static('assets'))
 const bodyparser= require("body-parser")
const  bodyParserMiddleWare= bodyparser.urlencoded({extended: true})
const path = require("path")
app.use(express.static(path.join(__dirname + '/')));
 //const dataRoute = require("./routes/data.route.js")
 //app.use(dataRoute)

 app.get('/', (req, res, next)=>{
    res.sendFile(path.join(__dirname, "home.html"))
  })




 app.listen(PORT, ()=>{
     console.log(`working on http://localhost:${PORT}`)
 })
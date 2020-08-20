const express = require("express")
const MongoClient = require("mongodb").MongoClient
const dotenv = require("dotenv")
const assert = require("assert")
const apiRouter = require('./mainroute')
dotenv.config()
let app = express()
let username = process.env.ACCESS_USER_NAME
let password = process.env.ACCESS_PASSWORD
let clusterURL = process.env.MONGO_URL
let port = process.env.OUTPUT_PORT
let url =
  "mongodb://localhost:27017"


console.log("Username " + username + "  Cluster URL " + clusterURL)
console.log(url)
// Access Control Origin
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Methods",
    "POST,GET,PUT,PATCH,DELETE,OPTIONS"
  )
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Option,Authorization"
  )
  next()
})

	app.use("/api/",apiRouter)
 
	// Port Listening
  	app.listen(port, () => {
    	console.log("App Listen at port " + port)
  	})



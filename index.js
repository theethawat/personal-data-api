const express = require("express")
const MongoClient = require("mongodb").MongoClient
const dotenv = require("dotenv")
const assert = require("assert")
dotenv.config()
let app = express()
let username = process.env.ACCESS_USER_NAME
let password = process.env.ACCESS_PASSWORD
let clusterURL = process.env.MONGO_URL
let port = process.env.OUTPUT_PORT
let url =
  "mongodb://" +
  username +
  ":" +
  password +
  "@" +
  clusterURL +
  "/" +
  "?retryWrites=true"
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

MongoClient.connect(url, (err, client) => {
  if (err) {
    console.log("Error  " + err)
  }

  const db = client.db("tdc_kitti")

  app.get("/", (req, res) => {
    res.send("Server Running")
  })

  // Get Personal Data
  app.get("/personal-data", (req, res) => {
    console.log("In Personal Data")
    let output = db
      .collection("personal")
      .find()
      .forEach((doc) => {
        res.json(doc)
      })
      .catch((err) => {
        console.log("Error on Personal Data Get " + err)
      })
  })

  // Get Introduce Myself Part
  app.get("/personal-data/introduce", (req, res) => {
    console.log("In Personal Data")
    db.collection("personal")
      .find()
      .forEach((doc) => {
        res.json(doc.introduction)
      })
      .catch((err) => {
        console.log("On Persoanl Data Introduce get Error" + err)
      })
  })

  // Get All Project Data
  app.get("/project/", (req, res) => {
    let allData = []
    db.collection("project")
      .find()
      .forEach((data) => {
        allData.push(data)
      })
      .then(() => {
        res.json(allData)
      })
      .catch((err) => {
        console.log("Error on All Project Finding" + err)
      })
  })

  // Search Project on Specific Year
  app.get("/project/:year", (req, res) => {
    let allData = []
    let searchYear = req.params.year
    console.log(searchYear)
    db.collection("project")
      .find({ year: +searchYear })
      .forEach((data) => {
        allData.push(data)
      })
      .then(() => {
        res.json(allData)
      })
      .catch((err) => {
        console.log("Error on All Project Finding" + err)
      })
  })

  //Search All Skill
  app.get("/skill", (req, res) => {
    let allData = []
    db.collection("skill")
      .find()
      .forEach((data) => {
        allData.push(data)
      })
      .then(() => {
        res.json(allData)
      })
      .catch((err) => {
        console.log("Error on All Skill Finding" + err)
      })
  })

  //Search on University
  app.get("/university/", (req, res) => {
    let allData = []
    db.collection("university")
      .find()
      .forEach((data) => {
        allData.push(data)
      })
      .then(() => {
        res.json(allData)
      })
      .catch((err) => {
        console.log("Error on All University Finding" + err)
      })
  })

  // Port Listening
  app.listen(port, () => {
    console.log("App Listen at port " + port)
  })
})

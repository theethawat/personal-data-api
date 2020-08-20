const express = require('express')
const MongoClient = require("mongodb").MongoClient
const app = express.Router()
const url = "mongodb://localhost:27017/"

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
  })

}
)

 module.exports = app

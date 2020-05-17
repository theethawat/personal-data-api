const express = require("express")
const MongoClient = require("mongodb").MongoClient
const assert = require("assert")
const connectionItem = require("./env.json")
const port = 8030
let app = express()

let url =
  "mongodb://" +
  connectionItem.username +
  ":" +
  connectionItem.password +
  "@" +
  connectionItem["cluster-url"] +
  "/" +
  "?retryWrites=true"
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

  app.get("/personal-data/introduce", (req, res) => {
    console.log("In Personal Data")
    let output = db
      .collection("personal")
      .find()
      .forEach((doc) => {
        let allData = doc
        res.json(doc.introduction)
      })
      .catch((err) => {
        console.log("On Persoanl Data Introduce get Error" + err)
      })
  })

  app.listen(port, () => {
    console.log("App Listen at port " + port)
  })
})

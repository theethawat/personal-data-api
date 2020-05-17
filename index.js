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
  let personalData = db.collection("personal").find({})
  app.get("/", (req, res) => {
    res.send("Server Running")
  })

  app.listen(port, () => {
    console.log("App Listen at port " + port)
  })
})

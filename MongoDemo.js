const MongoClient = require("mongodb").MongoClient
const assert = require("assert")
const connectionItem = require("./env.json")
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
  let cursor = db.collection("personal").find({})

  interateFunc = (doc) => {
    console.log(JSON.stringify(doc, null, 4))
  }

  errorFunc = (err) => {
    console.log(err)
  }

  cursor.forEach(interateFunc, errorFunc)
})

const express = require("express")
const app = express()
const axios = require("axios")
const parseString = require("xml2js").parseStringPromise
const dataURL =
  "https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-Indonesia.xml"

app.get("/", async (req, res) => {
  const resp = await axios.get(dataURL)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

// Setting the server to listen at port 3000
app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("Server is running at port 3000")
})

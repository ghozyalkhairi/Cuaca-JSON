const express = require("express")
const app = express()
const axios = require("axios")
const cors = require("cors")
const parseString = require("xml2js").parseStringPromise
const dataURL = "https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast"

app.use(cors())

app.get("/", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-Indonesia.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/aceh", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-Aceh.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/bali", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-Bali.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/bangka-belitung", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-BangkaBelitung.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/banten", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-Banten.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/bengkulu", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-Bengkulu.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/yogyakarta", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-DIYogyakarta.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/jakarta", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-DKIJakarta.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/gorontalo", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-Gorontalo.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/jambi", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-Jambi.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/jawa-barat", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-JawaBarat.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/jawa-tengah", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-JawaTengah.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/jawa-timur", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-JawaTimur.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/kalimantan-barat", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-KalimantanBarat.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(parsed)
})

app.get("/kalimantan-selatan", async (req, res) => {
  const resp = await axios.get(
    `${dataURL}/DigitalForecast-KalimantanSelatan.xml`
  )
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/kalimantan-tengah", async (req, res) => {
  const resp = await axios.get(
    `${dataURL}/DigitalForecast-KalimantanTengah.xml`
  )
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/kalimantan-timur", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-KalimantanTimur.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/kalimantan-utara", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-KalimantanUtara.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/kepulauan-riau", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-KepulauanRiau.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/lampung", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-Lampung.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/maluku", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-Maluku.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/maluku-utara", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-MalukuUtara.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/nusa-tenggara-barat", async (req, res) => {
  const resp = await axios.get(
    `${dataURL}/DigitalForecast-NusaTenggaraBarat.xml`
  )
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/nusa-tenggara-timur", async (req, res) => {
  const resp = await axios.get(
    `${dataURL}/DigitalForecast-NusaTenggaraTimur.xml`
  )
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/papua", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-Papua.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/papua-barat", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-PapuaBarat.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/papua", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-Papua.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/riau", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-Riau.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/sulawesi-barat", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-SulawesiBarat.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/sulawesi-selatan", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-SulawesiSelatan.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/sulawesi-tengah", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-SulawesiTengah.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/sulawesi-tenggara", async (req, res) => {
  const resp = await axios.get(
    `${dataURL}/DigitalForecast-SulawesiTenggara.xml`
  )
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/sulawesi-utara", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-SulawesiUtara.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/sumatera-barat", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-SumateraBarat.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/sumatera-selatan", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-SumateraSelatan.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.get("/sumatera-utara", async (req, res) => {
  const resp = await axios.get(`${dataURL}/DigitalForecast-SumateraUtara.xml`)
  const parsed = await parseString(resp.data)
  const { forecast } = await parsed.data
  const [{ area }] = await forecast
  res.json(area)
})

app.listen(process.env.PORT || 3000, function (req, res) {
  console.log("Server is running at port 3000")
})

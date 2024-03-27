const express = require('express')
const app = express()
const port = 3300

app.use(express.json())
app.use(express.urlencoded())
const data = [
  {
    "id": 1,
    "name": "A",
  },
  {
    "id": 2,
    "name": "B",
  },
  {
    "id": 3,
    "name": "C",
  },
]
app.get('/getobject', (req, res) => {
  res.send(data)
})

app.post('/postobject', (req, res) => {
  data.push(req.body)
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
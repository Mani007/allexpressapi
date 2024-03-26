const express = require('express')
const app = express()
const port = 3300

app.get('/getobject', (req, res) => {
  res.send([
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
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
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

app.put('/putobject', (req, res) => {
  if (data.some( 
    (obj) => obj.id == req.body.id))
 {
  res.send({ "message": "Data already exists"})
 

  }
  else {
    //data.forEach.name = req.body.name
    data.push(req.body)
    res.send(data) 
  }
 
})

app.patch('/patchobject', (req, res) => {
  if (data.some( 
    (obj) => obj.id == req.body.id))
 {
  index_obj = data.findIndex(obj => obj.id == req.body.id)
  //console.log(index_obj)
  //data.map(u => u.id !== req.body.id ? u : req.body)
  data[index_obj] = req.body
  res.send(data)  

  }
  else {
    //data.forEach.name = req.body.name
    res.send({ "message": "Data did not exists"})
    
  }
 
})

app.delete('/deleteobject', (req, res) => {
  if (data.some( 
    (obj) => obj.id == req.body.id))
 {
  index_obj = data.findIndex(obj => obj.id == req.body.id)
  //console.log(index_obj)
  //data.map(u => u.id !== req.body.id ? u : req.body)
  data.splice(index_obj, 1)
  res.send(data)  

  }
  else {
    //data.forEach.name = req.body.name
    res.send({ "message": "Data did not exists"})
    
  }
 
})

app.get('/middleware',
 (req,res,next) => { 
  // Middleware function here
  console.log({ "message": "Executed as middleware" });
  next(); // super important function to add here
},  (req, res, next) => {
// Main function
res.send(data)
next(); // super important function to add here
}, (req, res, next) => {
  // Main function
  //res.send(data)
  console.log({ "message": "Finished execution of middleware" });
  next(); // super important function to add here
  },  (req, res, next) => {
    // Main function
    //res.send(data)
    console.log("GET request completed with all middleware results");
    next(); // super important function to add here
    })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
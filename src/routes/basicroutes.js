const {Router} = require('express')
const router = Router()



const data = [
    {
      "id": 1,
      "name": "A",
      "year":"2017",
    },
    {
      "id": 2,
      "name": "B",
      "year":"2018",
    },
    {
      "id": 3,
      "name": "C",
      "year":"2019",
    },
  ]
  router.get('/getobject', (req, res) => {
    res.cookie('visited', true, {
        maxAge: 1000
    })
    res.send(data)
  })
  
  router.post('/postobject', (req, res) => {
    data.push(req.body)
    res.send(data)
  })
  
  router.put('/putobject', (req, res) => {
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
  
  router.patch('/patchobject', (req, res) => {
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
  
  router.delete('/deleteobject', (req, res) => {
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
  
  router.get('/middleware',
   (req,res,next) => { 
    // Middleware function here
    console.log({ "message": "Executed as middleware" });
    next(); // super important function to add here
  },  (req, res, next) => {
  // Main function
  res.send(data)  // you can only send the respone object once in the entire API but you can have multiple middleware functions
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
  
  router.get('/search/:id', (req, res, next) => {
    //console.log(req.params.id)
    // We can also have multiple route paramters here
    // object destructuring 
    const { id } = req.params
    console.log(id)
    res.send(data.filter(obj => obj.id == req.params.id))
    next(); // super important function to add here
  });

  router.get('/querysearch', (req, res, next) => {
    //console.log(req.params.id)
    // We can also have multiple route paramters here
    // object destructuring 
    const { id,year } = req.query
    //console.log(id)
    if (id) {

        res.send(data.filter(obj => obj.id == req.query.id))
        next(); // super important function to add here
    } else if (parseInt(year) ) {
        res.send(data.filter(obj => obj.year == req.query.year))
        next(); 
    } else {
        res.send(data)
        next(); 
    }
  });

  module.exports = router;
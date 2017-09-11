
module.exports = {

//~~~~~~~~~~~~~~~~~~~~~~  QUERIES  ~~~~~~~~~~~~~~~~~~~~~


  getBusinesses: function (req, res) {
    let db= req.app.get('db')
    db.getBusinesses().then((results) => {
      console.log(results);
      res.status(200).send(results);
    }).catch((error)=>{
        console.log(error);
        res.status(400).send(error);        
    })
  },
  
  getSingleBusiness: function (req, res) {
    let db= req.app.get('db')
    const value = req.params.id;
    db.getSingleBusiness([value]).then((results) => {
      console.log(results);
      res.status(200).send(results);
    }).catch((error)=>{
      console.log(error);
      res.status(400).send(error);        
  })
  },
 
  createBusiness: function (req, res) {
    let db= req.app.get('db')
    db.createBusiness().then((results) => {
      console.log(results);
      res.status(200).send(results);
    }).catch((error)=>{
      console.log(error);
      res.status(400).send(error);        
  })
  },

  // updateBusiness: function (req, res) {
  //   let db= req.app.get('db')
  //   let name = req.body.business_name;
  //   let redirect = req.body.redirect;
  //   let logourl = req.body.logo;
  //   db.updateBusiness([name, redirect, logourl]).then((results) => {
  //     console.log(results);
  //     res.status(200).send(results);
  //   }).catch((error)=>{
  //     console.log(error);
  //     res.status(400).send(error);        
  // })
  // },
  // destroyBusiness: function (req, res) {
  //   let db= req.app.get('db')
  //   const value = req.params.id;
  //   db.destroyBusiness([value]).then((results) => {
  //     console.log(results);
  //     res.status(200).send(results);
  //   }).catch((error)=>{
  //       console.log(error);
  //       res.status(400).send(error);        
  //   })
  // },
  
  getJobs: function (req, res) {
    console.log(req.params);
    let db= req.app.get('db')
    // console.log('processing get jobs');
    db.getJobs().then((results) => {
      // console.log(results);
      res.status(200).send(results);
    }).catch((error)=>{
        console.log(error);
        // res.status(400).send(error);        
    })
  },
 

}
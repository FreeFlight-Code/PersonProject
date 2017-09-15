// import {profile} from '../server.js';
module.exports = {

  //~~~~~~~~~~~~~~~~~~~~~~  QUERIES  ~~~~~~~~~~~~~~~~~~~~~


  getBusinesses: function (req, res) {
    let db = req.app.get('db')
    db.getBusinesses().then((results) => {
      console.log(results);
      res.status(200).send(results);
    }).catch((error) => {
      console.log(error);
      res.status(400).send(error);
    })
  },

  getSingleBusiness: function (req, res) {
    let db = req.app.get('db')
    const value = req.params.id;
    // console.log(' in getsingle business api file id = ' + value)
    db.getSingleBusiness([value]).then((results) => {
      // console.log(results);
      res.status(200).send(results);
    }).catch((error) => {
      console.log(error);
      res.status(400).send(error);
    })
  },

  createBusiness: function (req, res) {
    let db = req.app.get('db')
    db.createBusiness().then((results) => {
      console.log(results);
      res.status(200).send(results);
    }).catch((error) => {
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
    let db = req.app.get('db')
    db.getJobs().then((results) => {
      res.status(200).send(results);
    }).catch((error) => {
      console.log(error);
      res.status(400).send(error);
    })
  },
  
  getSingleJob: function (req, res) {
    let db = req.app.get('db')
    const value = req.params.id;
    db.getSingleJob([value]).then((results) => {
      console.log(results);
      res.status(200).send(results);
    }).catch((error) => {
      console.log(error);
      res.status(400).send(error);
    })
  },
  getJobsSingleCustomer: function (req, res) {
    let db = req.app.get('db')
    const value = req.params.id;
    db.getJobsSingleCustomer([value]).then((results) => {
      console.log(results);
      res.status(200).send(results);
    }).catch((error) => {
      console.log(error);
      res.status(400).send(error);
    })
  },

  login: function (req, res, next) {
    // console.log(res);

    let db = req.app.get('db')
    let { email, password, business_id} = req.body;
    db.login(email).then((results) => {
      if (!results[0]) {
        let auth = 'client';
        db.adduser([email, password, business_id, auth]).then((results2) => {
          results.push(results2[0]);
          console.log('adduser ', results);
          res.status(200).send(results)
        })
        .catch((error) => {
          console.log(error);
          res.status(400).send(error);
        })
      }
    

      else if (results[0].password !== password) {
        let id = req.params.id;
        console.log('login failure');
        res.status(400).send('login failure');
      }
    else if (results[0].password === password) {
      db.loginb(email).then((results) => { 
        //redirect to scheduler page
      res.status(200).send(results);
      })
    }
  }).catch((error) => {
    console.log(error);
    res.status(400).send(error);
  })
},

clientlogin: function (req, res, next) {
  let value = req.params.id;
  console.log('inside client api')
  console.log(req)
  let db = req.app.get('db');
  db.clientlogin([value]).then((res) => {
    console.log("response from db " + res);
  })


}

}
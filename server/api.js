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

  login: function (req, res, next) {
    // console.log(res);

    let db = req.app.get('db')
    let { email, password, business_id} = req.body;
    // parseInt(business_id);
    // console.log('backend api.login' + req.body)
    db.login(email).then((results) => {
      // console.log(!results[0])
      if (!results[0]) {
        // console.log(results + ' should be empty string')
        db.adduser([email, password, business_id]).then((results2) => {
          // console.log(results2)
          results.push(results2[0]);
          console.log('adduser ', results);
          // console.log(profile)
          // res.status(200).send('adduser finished')
          // return res.redirect(302, 'http://localhost:3000/#/login/scheduler');
        }
        ).catch((error) => {
          console.log(error);
          res.status(400).send(error);
          // return res.redirect(302, 'http://localhost:3000/login');
        })
      }
    

    else if (results[0].password !== password) {
      let id = req.params.id;
      console.log('login failure');
      //redirect to login page
    }

    // res.status(200);
    else if (results[0].password === password) {
      console.log('login success')
      //add results to profile on props
      //redirect to scheduler page
      
      res.status(200);
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
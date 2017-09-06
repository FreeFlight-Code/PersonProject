//postgres://ezqmntzzrfjxch:e5e4ca3fd78704cbf90e9e747c880f27cc7cfad9625864a6e40be0f9275c3759@ec2-23-21-197-231.compute-1.amazonaws.com:5432/d7lju78q4gns61?ssl=true

require('dotenv').config();

const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    session = require('express-session');
const massive = require('massive');
const api = require('./server/api.js')

const app = express();

app.use(cors());
app.use(bodyParser.json());

massive({
    host: 'ec2-23-21-197-231.compute-1.amazonaws.com',
    port: 5432,
    database: 'd7lju78q4gns61',
    user: 'ezqmntzzrfjxch',
    password: 'e5e4ca3fd78704cbf90e9e747c880f27cc7cfad9625864a6e40be0f9275c3759',
    ssl: true
  }).then(function(db) {
    app.set('db', db);
  });
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
AUTH0 LOGIN
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

app.use(session({
    secret: 'password',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
  }, function(accessToken, refreshToken, extraParams, profile, done) {

   console.log(profile);

   done(null, profile);

}));

//kicks off process
app.get('/auth', passport.authenticate('auth0'));

//redirects
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/login/scheduler',
    failureRedirect: 'http://localhost:3000/'
    }))

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(obj, done) {
    done(null, obj)
});

//to help stay logged in between pages or routes
app.get('/auth/me', (req, res, next) => {
    if (!req.user) {
      return res.status(404).send('User not found');
    } else {
      return res.status(200).send(req.user);
    }
  })
  
 app.get('/auth/logout', (req, res) => {
    req.logOut();
    return res.redirect(302, 'http://localhost:3000/');
  })
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
API Endpoints
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
api(app);
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
LISTEN
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const PORT = 3030;
app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    })
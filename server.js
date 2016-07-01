import path from 'path'
import Express from 'express'
import request from 'request'
import passport from 'passport'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import cookieSession from 'cookie-session'
import util from 'util'
import GoogleStrategy from 'passport-google-oauth'
import bodyParser from 'body-parser'
import config from 'config'

const GoogleOauthStrategy = GoogleStrategy.OAuth2Strategy
const app = new Express()

app.set('view engine', 'ejs');
app.use(Express.static('build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(cookieSession({
  secret: 'session_secret',
  maxage: 60 * 60 * 24 * 1000
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new GoogleOauthStrategy({
    clientID: config.googleAuth.googleClientID,
    clientSecret: config.googleAuth.googleClientSecret,
    callbackURL: '/' + config.googleAuth.callbackUrl
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));

app.get('/auth/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email'] }));

app.get('/auth/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
    res.redirect('/authuser');
});

app.get('/authuser', ensureAuthenticated, function(req, res){
  const validEmail = req.user && req.user.emails[0].value.split('@')[1] === 'indix.com'
  if(validEmail) {
    request(`http://${config.remote.host}/${req.user.emails[0].value}/employee`, (e,r,t) => {
      const response = JSON.parse(t)
      if(response.status === true)
        res.redirect('/')
      else
        res.redirect('/unauth')
    })
  } else
    res.redirect('/unauth')
})

app.get('/login', function(req, res){
  const file = path.join(path.resolve(path.dirname(), 'views', 'login.html'));
  res.sendFile(file);
});

app.get('/logout', ensureAuthenticated, function(req, res){
  req.logout();
  res.redirect('/login');
});

app.get('/unauth', function(req, res){
  const file = path.join(path.resolve(path.dirname(), 'views', 'unauth.html'));
  res.sendFile(file);
});

app.get('/user', ensureAuthenticated, (req, res) => {
  res.json(req.session.passport.user)
})

app.get('/user/all', ensureAuthenticated, (req, res) => {
  request.get(`http://${config.remote.host}/employees`, (a,r,t) => {
    res.json(JSON.parse(t))
  })
})

app.get('/reviewee', ensureAuthenticated, (req, res) => {
  const mail = req.session.passport.user.emails[0].value
  request(`http://${config.remote.host}/${mail}/reviewees`, (a,s,t) => {
    res.json(JSON.parse(t))
  })
})


app.post('/goals', ensureAuthenticated, (req, res) => {
  const body = req.body
  const mail = req.session.passport.user.emails[0].value
  request.post({
    url:`http://${config.remote.host}/${mail}/goal/add`, form: body.goal
  }, (err, httpResponse, body) => {
    const response = JSON.parse(body)
    if(response.status === true)
      res.status(200).end()
    else
      res.status(500).end()
  })
})

app.get('/goals', ensureAuthenticated, (req, res) => {
  const mail = req.query.email || req.session.passport.user.emails[0].value
  request(`http://${config.remote.host}/${mail}/goals`, (a,s,t) => {
    res.json(JSON.parse(t))
  })
})

app.get('/mentee', ensureAuthenticated, (req, res) => {
  const mail = req.session.passport.user.emails[0].value
  request(`http://${config.remote.host}/${mail}/mentees`, (a,s,t) => {
    res.json(JSON.parse(t))
  })
})

app.get('/', ensureAuthenticated, function(req, res){
  const file = path.join(path.resolve(path.dirname(), 'views', 'index.html'));
  res.sendFile(file)
});

app.get('*', ensureAuthenticated, function(req, res){
  const file = path.join(path.resolve(path.dirname(), 'views', 'not_found.html'));
  res.sendFile(file)
});

app.listen(config.port, function () {
  console.log(process.env.NODE_ENV || 'default','environment')
  console.log('UI server listening at http://localhost:'+ config.port);
  config.virtualHost && console.log('\nUse '+ config.host +' to access the UI')
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login');
}

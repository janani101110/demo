const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const User = require('./models/User');
const jwt = require('jsonwebtoken');

require('dotenv').config();

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err, null);
    });
});

passport.use('google-signup', new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/signup/callback",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
  scope: ["profile", "email"]
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const existingUser = await User.findOne({ userId: profile.id });
    if (existingUser) {
      // User already exists, return an error
      return done(null, existingUser);
    } else {
      const newUser = await User.create
      ({ 
        userId: profile.id, 
        username: profile.displayName, 
        email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : '',
        profilePicture: profile._json.picture,
      });
      return done(null, newUser);
    }
  } catch (err) {
    return done(err, null);
  }
}));



passport.use('google-signin', new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/signin/callback",
  scope: ["profile", "email"],
},
  function (accessToken, refreshToken, profile, done) {
    User.findOne({ userId: profile.id })
        .then((existingUser) => {
          if (existingUser) {
            // User exists, generate token
            accessToken = jwt.sign( { userId: existingUser.userId }, process.env.accessToken_secret, { expiresIn: '5h' });
            console.log('generated token : ', accessToken);
            // Save token to user document
            existingUser.isAuthenticated = true;
            existingUser.save()
              .then(() => {
                return done(null, existingUser);
              })} else {
            // User does not exist, you might want to create a new user here
            return done(null, false, { message: 'User does not exist' });
          }
        })
        .catch((err) => {
          return done(err, null);
        });
  }));
  passport.use(User.createStrategy());





module.exports = passport;
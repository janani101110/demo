const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");
const User = require('./models/User');
const jwt = require('jsonwebtoken');

require('dotenv').config();



passport.use('google-signin', new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/signin/callback",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
},
  function (accessToken, refreshToken, profile, done) {
    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if (existingUser) {
          // User already exists, handle accordingly
          const token = jwt.sign({ userId: existingUser.id }, process.env.SECRET_KEY, { expiresIn: '3h' });
          console.log("Generated Token:", token);
          return done(null, { user: existingUser, token: token  });
        } else {
          return done(null, false, { message: 'User does not exist' });
        }
      })
      .catch((err) => {
        return done(err, null);
      });
  }));

passport.use('google-signup', new GoogleStrategy({
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: "http://localhost:5000/auth/google/signup/callback",
  userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const existingUser = await User.findOne({ googleId: profile.id });
    if (existingUser) {
      // User already exists, return an error
      return done(null, existingUser);
    } else {
      // User doesn't exist, create a new user
      const newUser = await User.create({ googleId: profile.id, username: profile.displayName });
      return done(null, newUser);
    }
  } catch (err) {
    return done(err, null);
  }
}));

passport.use(User.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(async function (id, done) {
  try {
    const user = await User.findById(_id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});


module.exports = passport;
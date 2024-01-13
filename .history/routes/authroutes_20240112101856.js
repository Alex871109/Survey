const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
    app.get('/api/' , (req , res)=>{
    
       res.send('hello from simple server :)')
    
    })

};

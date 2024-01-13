const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
  app.get('/api/logout' , (req , res)=>{
    req.loo
     res.send('hello from simple server :)')
  
  })
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile'],
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/auth/facebook', passport.authenticate('facebook', {
    scope: [ 'profile' ]
  }));

  app.get('/login/facebook', passport.authenticate('facebook'));

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

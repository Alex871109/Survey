// const { createProxyMiddleware } = require('http-proxy-middleware');
// module.exports = function (app) {
//   app.use(
//     ['/api','/bill', '/auth/google'],
//     createProxyMiddleware({
//       target: 'http://localhost:5000',

//     })
//   );
//    // Configuración adicional para Axios
//    app.use((req, res, next) => {
//     // Verifica si la solicitud es una solicitud de API o auth/google
//     if (req.url.startsWith('/api') || req.url.startsWith('/auth/google')) {
//       // Redirige la solicitud al back-end
//       req.url = req.url.replace(/^\/api|^\/auth\/google/, '');
//       app.handle(req, res);
//     } else {
//       // Si no es una solicitud de API o auth/google, continúa con el manejo normal
//       next();
//     }
//   });
// };

const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/api', '/auth/google'],
    createProxyMiddleware({
      target: 'http://localhost:5000',
    })
  );
};

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./p');
} else {
  module.exports = require('./dev');
}

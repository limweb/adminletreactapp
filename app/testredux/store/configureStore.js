
// process.env.NODE_ENV = 'production';
// process.env.NODE_ENV = 'development';
console.log('envcfgstore=',process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
module.exports = require('./configureStore.production');
} else {
  module.exports = require('./configureStore.development');
}

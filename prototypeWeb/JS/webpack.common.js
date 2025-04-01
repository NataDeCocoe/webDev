const path = require('path');

module.exports = {
  entry: {
    app: './JS/app.JS',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: './JS/app.JS',
  },
};

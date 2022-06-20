const tsNode = require('ts-node');
const testTSConfig = require('./cypress/tsconfig.json');

tsNode.register({
  files: true,
  transpileOnly: true,
  project: './cypress/tsconfig.json'
});
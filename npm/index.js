const _ = require('lodash');
console.log(_.chunk([1, 2, 3, 4], 2));

const minimist = require('minimist');
console.log(minimist(process.argv.slice(2)));

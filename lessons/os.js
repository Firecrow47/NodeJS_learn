const os = require('os');
const cluster = require('cluster');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);
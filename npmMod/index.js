const chalk = require('chalk');
const valid = require('validator');
const name = 'JAI SHREE RAM 🚩🙏';
console.log(`Its all about ${chalk.hex('#f77101').underline(name)}`);

const res = valid.isEmail("nitesh@gmail.com");
console.log(res ? chalk.green.inverse(res) :chalk.magenta.inverse(res) );
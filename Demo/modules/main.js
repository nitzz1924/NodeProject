const {fullname,allpaths} = require('./bodmass');
const actualname = fullname();
const path = allpaths();
// console.log(actualname);
console.log(`Architecture is : ${actualname.architecture}`);
console.log(`Hostname is : ${actualname.hostname}`);
console.log(`Free Memory is : ${actualname.freememory}`);

console.log(`Currect Directory is : ${path.currentdir}`);
console.log(`Extension is : ${path.extension}`);
console.log(`Root Directory  is : ${path.RootName}`);
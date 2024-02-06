const fs = require('fs');

fs.writeFile("Demo/mode.txt","hello",(err)=>{
    console.log(err);
});

// fs.appendFile("Demo/mode.txt"," hello this is nitesh",(err2)=>{
//     console.log(err2);
// });

fs.mkdir("Demo/modules",(mod) => {
    console.log(mod);
})

fs.writeFile("Demo/modules/bodmass.js","bodmass",(bodmass)=>{
    console.log(bodmass);
});

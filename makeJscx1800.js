const fs = require('fs');

module.exports = function () {
    fs.mkdir('./jscx-1800' ,()=>{});
    fs.mkdir('./jscx-1800/Danylo_Kopytko', () => {});

    let data = 'Blablabla';
    fs.writeFile('./jscx-1800/Danylo_Kopytko/info.txt', data,()=>{});

    fs.writeFile('./jscx-1800/Danylo_Kopytko/futureImg.jpg', '', ()=>{});
    fs.createReadStream('./WJ-skAHWO8M.jpg').pipe(fs.createWriteStream('./jscx-1800/Danylo_Kopytko/futureImg.jpg'));

};




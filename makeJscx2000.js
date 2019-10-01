const fs = require('fs');

module.exports = function () {
    fs.mkdir('./jscx-2000', () => {});

    fs.mkdir('./jscx-2000/Random_User', () => {});

    let data = 'Yeahyeahyeah';

    fs.writeFile('./jscx-2000/Random_User/info.txt', data,()=>{});

    fs.writeFile('./jscx-2000/Random_User/futureImg.jpg', '', ()=>{});
    fs.createReadStream('./WJ-skAHWO8M.jpg').pipe(fs.createWriteStream('./jscx-2000/Random_User/futureImg.jpg'));

};

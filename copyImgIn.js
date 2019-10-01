const fs = require('fs');

module.exports = function (group, user, imgName) {
    fs.writeFile(`./${group}/${user}/${imgName}.jpg`, '', (err)=>{
        if (err) throw new Error('Copy img problem');
    });

    fs.createReadStream(`./${imgName}.jpg`).pipe(fs.createWriteStream(`./${group}/${user}/${imgName}.jpg`));
};
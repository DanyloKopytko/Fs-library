const fs = require('fs');

module.exports = function (group, user, data) {
    fs.writeFile(`./${group}/${user}/info${user}.txt`, data,(err)=>{
        if (err) throw new Error("Make info problem");
    });
};
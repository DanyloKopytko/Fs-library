const fs = require('fs');

module.exports = function (group, user) {
    fs.mkdir(`./${group}` ,(err)=>{});

    fs.mkdir(`./${group}/${user}` ,(err)=>{});
};



const fs = require('fs');

function createGroups() {
    let make1800 = require('./makeJscx1800');
    make1800();

    let make2000 = require('./makeJscx2000');
    make2000();
}

createGroups();





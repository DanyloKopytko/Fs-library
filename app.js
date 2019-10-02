const fs = require('fs');

const makeDir = require('./makeDir');
const makeInfo = require('./makeInfo');
const copyImgIn = require('./copyImgIn');

makeDir('jscx-1800','Danylo Kopytko');
makeDir('jscx-2000','Random User');

makeInfo('jscx-1800','Danylo Kopytko', 'Name: Danylo Kopytko, \n Age: 18 \n Skills: HTML, CSS, JS');
makeInfo('jscx-2000','Random User', 'Name: Random Userovich, \n Age: 100 \n Skills: HTML, CSS, JS');

copyImgIn('jscx-1800','Danylo Kopytko', 'WJ-skAHWO8M');
copyImgIn('jscx-2000','Random User', 'WJ-skAHWO8M');

// const swap = require('./swap');
// swap('./jscx-1800/Danylo Kopytko/','./jscx-2000/Random User/');





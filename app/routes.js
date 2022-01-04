const express = require('express')
const router = express.Router()


// copy the const name and the file path to new version
const altformats = require('./routes/altformats');
const bankaccount = require('./routes/bankaccount');
const bankaccount2 = require('./routes/bankaccount2');
const additionalsecurity = require('./routes/additionalsecurity');

//copy the router use and update the sprint version
router.use(altformats);
router.use(bankaccount);
router.use(bankaccount2);
router.use(additionalsecurity);



module.exports = router;

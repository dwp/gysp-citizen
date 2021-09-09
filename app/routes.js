const express = require('express')
const router = express.Router()


// copy the const name and the file path to new version
const altformats = require('./routes/altformats');

//copy the router use and update the sprint version
router.use(altformats);



module.exports = router;

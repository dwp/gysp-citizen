const express = require('express')
const router = express.Router()

router.post('*', function (req, res, next) {
  console.log(req.body);

  if (req.body['next-page']) {
    res.redirect(req.body['next-page']);
  } else {
    next();
  }
});

// copy the const name and the file path to new version
const altformats = require('./routes/altformats');
const bankaccount = require('./routes/bankaccount');
const bankaccount2 = require('./routes/bankaccount2');
const additionalsecurity = require('./routes/additionalsecurity');
const inviterequest = require('./routes/inviterequest');
const claimfromdate = require('./routes/claimfromdate');
const welsh = require('./routes/welsh');

//copy the router use and update the sprint version
router.use(altformats);
router.use(bankaccount);
router.use(bankaccount2);
router.use(additionalsecurity);
router.use(inviterequest);
router.use(claimfromdate);
router.use(welsh);



module.exports = router;

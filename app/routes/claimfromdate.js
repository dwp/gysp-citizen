const express = require('express');
const router = express.Router()



// Scenario one

router.post('/claimfromdate/s1/date-want-sp', (req, res) => {
  res.redirect('/claimfromdate/s1/check-start-date')
})
;


router.post('/claimfromdate/s1/check-start-date', function(req, res) {
  if (req.body['claim-from'] === 'delay') {
    res.redirect('');
  } else {
    res.redirect('');
  }
});


// Scenario two


// Scenario three





  module.exports = router;

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

router.post('/claimfromdate/scenario-1/date-want-sp', function(req, res) {
  if (req.body['passport-issued-month'] === '11') {
    res.redirect('do-not-claim-yet');
  }
  else if (req.session.data["passport-issued-month"] === "10") {
    res.redirect('prison');
  } 
  else if (req.session.data["passport-issued-month"] === "9") {
    res.redirect('check-start-date');
  }
});

router.post('/claimfromdate/scenario-3/post-spa', function(req, res) {
  if (req.body['passport-issued-month'] === '11') {
    res.redirect('do-not-claim-yet');
  }
  else if (req.session.data["passport-issued-month"] === "10") {
    res.redirect('prison');
  } 
  else if (req.session.data["passport-issued-month"] === "9") {
    res.redirect('check-start-date');
  }
});


// Scenario two


// Scenario three





  module.exports = router;

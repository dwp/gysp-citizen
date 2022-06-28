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









router.post('/additionalsecurity/marital-status', function(req, res) {
  if (req.body['marital'] === 'married') {
    res.redirect('marital-details');
  }
  else if (req.body['marital'] === 'divorced') {
    res.redirect('marital-details-divorce');
  }
  else if (req.body['marital'] === 'civil') {
    res.redirect('marital-details-civil-partner');
  }
  else if (req.body['marital'] === 'dissolved') {
    res.redirect('marital-details-ex-civil-partner');
  }
  else if (req.body['marital'] === 'widowed') {
    res.redirect('marital-details-late-spouse');
  }
  else {
    res.redirect('/additionalsecurity/contact');
  }
});




  // Alt formats yes/no
  router.post('/additionalsecurity/question-3', function(req, res) {
    if (req.body['security-question-three'] === '10000') {
      res.redirect('check-successful');
    } else {
      res.redirect('check-failed');
    }
  });



  module.exports = router;

const express = require('express');
const router = express.Router()



// Scenario one

router.post('/claimfromdate/scenario-3/your-details', (req, res) => {
  res.redirect('/claimfromdate/scenario-3/post-spa')
})
;

router.post('/claimfromdate/scenario-3/post-spa', function(req, res) {
  if (req.body['passport-issued-year'] === '2021') {
    res.redirect('check-start-date');
  }
  else if (req.session.data["passport-issued-year"] === "2022") {
    res.redirect('prison');
  } 
  else {
    res.redirect('do-not-claim-yet');
  }
});


// Scenario two


// Scenario three





  module.exports = router;

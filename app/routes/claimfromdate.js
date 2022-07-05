const express = require('express');
const router = express.Router()



// Scenario one

router.post('/claimfromdate/scenario-1/your-details', (req, res) => {
  res.redirect('/claimfromdate/scenario-1/post-spa')
})
;

router.post('/claimfromdate/scenario-1/contact', (req, res) => {
  res.redirect('/claimfromdate/scenario-1/alt-formats')
})
;

router.post('/claimfromdate/scenario-1/alt-formats', (req, res) => {
  res.redirect('/claimfromdate/scenario-1/bank')
})
;

router.post('/claimfromdate/scenario-1/bank', (req, res) => {
  res.redirect('/claimfromdate/scenario-1/check-answers')
})
;

router.post('/claimfromdate/scenario-1/check-answers', (req, res) => {
  res.redirect('/claimfromdate/scenario-1/declaration')
})
;

router.post('/claimfromdate/scenario-1/declaration', (req, res) => {
  res.redirect('/claimfromdate/scenario-1/complete')
})
;


// Scenario two



router.post('/claimfromdate/scenario-2/your-details', (req, res) => {
  res.redirect('/claimfromdate/scenario-2/post-spa')
})
;

router.post('/claimfromdate/scenario-2/contact', (req, res) => {
  res.redirect('/claimfromdate/scenario-2/alt-formats')
})
;

router.post('/claimfromdate/scenario-2/alt-formats', (req, res) => {
  res.redirect('/claimfromdate/scenario-2/bank')
})
;

router.post('/claimfromdate/scenario-2/bank', (req, res) => {
  res.redirect('/claimfromdate/scenario-2/check-answers')
})
;

router.post('/claimfromdate/scenario-2/check-answers', (req, res) => {
  res.redirect('/claimfromdate/scenario-2/declaration')
})
;

router.post('/claimfromdate/scenario-2/declaration', (req, res) => {
  res.redirect('/claimfromdate/scenario-2/complete')
})
;



// Scenario three



router.post('/claimfromdate/scenario-3/your-details', (req, res) => {
  res.redirect('/claimfromdate/scenario-3/post-spa')
})
;

router.post('/claimfromdate/scenario-3/contact', (req, res) => {
  res.redirect('/claimfromdate/scenario-3/alt-formats')
})
;

router.post('/claimfromdate/scenario-3/alt-formats', (req, res) => {
  res.redirect('/claimfromdate/scenario-3/bank')
})
;

router.post('/claimfromdate/scenario-3/bank', (req, res) => {
  res.redirect('/claimfromdate/scenario-3/check-answers')
})
;

router.post('/claimfromdate/scenario-3/check-answers', (req, res) => {
  res.redirect('/claimfromdate/scenario-3/declaration')
})
;

router.post('/claimfromdate/scenario-3/declaration', (req, res) => {
  res.redirect('/claimfromdate/scenario-3/complete')
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





  module.exports = router;

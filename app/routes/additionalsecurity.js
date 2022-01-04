const express = require('express');
const router = express.Router()


// Invite code or GOV.UK Verify

router.post('/additionalsecurity/confirm-identity', function(req, res) {
  if (req.body['confirm-identity'] === 'code') {
    res.redirect('your-details');
  } else {
    res.redirect('https://get-state-pension.service.gov.uk/verify');
  }
});


router.post('/additionalsecurity/prison', (req, res) => {
  res.redirect('/additionalsecurity/lived-abroad')
})
;

router.post('/additionalsecurity/lived-abroad', (req, res) => {
  res.redirect('/additionalsecurity/worked-abroad')
})
;


router.post('/additionalsecurity/worked-abroad', (req, res) => {
  res.redirect('/additionalsecurity/marital-status')
})
;

router.post('/additionalsecurity/marital-status', (req, res) => {
  res.redirect('/additionalsecurity/contact')
})
;

router.post('/additionalsecurity/contact', (req, res) => {
  res.redirect('/additionalsecurity/alt-formats')
})
;

  // Alt formats yes/no
  router.post('/additionalsecurity/alt-formats', function(req, res) {
    if (req.body['alt-formats'] === 'yes') {
      res.redirect('alt-formats-choice');
    } else {
      res.redirect('payment-bank');
    }
  });


  router.post('/additionalsecurity/payment-bank', (req, res) => {
    res.redirect('/additionalsecurity/identity')
  })
  ;

  router.post('/additionalsecurity/identity', function(req, res) {
    if (req.body['identity'] === 'call') {
      res.redirect('check-answers');
    } else {
      res.redirect('security-bank');
    }
  });

  router.post('/additionalsecurity/security-bank', (req, res) => {
    res.redirect('/additionalsecurity/check-answers')
  })
  ;


  router.post('/additionalsecurity/check-answers', (req, res) => {
    res.redirect('/additionalsecurity/declaration')
  })
  ;

  router.post('/additionalsecurity/declaration', (req, res) => {
    res.redirect('/additionalsecurity/complete')
  })
  ;


  module.exports = router;

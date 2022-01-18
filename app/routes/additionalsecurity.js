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

// Alt formats yes/no
router.post('/additionalsecurity/alt-formats', function(req, res) {
  if (req.body['alt-formats'] === 'yes') {
    res.redirect('alt-formats-choice');
  } else {
    res.redirect('payment-bank');
  }
});

// Lived abroad yes/no
router.post('/additionalsecurity/lived-abroad', function(req, res) {
  if (req.body['lived-abroad'] === 'yes') {
    res.redirect('countries-lived');
  } else {
    res.redirect('worked-abroad');
  }
});

// Worked abroad yes/no
router.post('/additionalsecurity/worked-abroad', function(req, res) {
  if (req.body['worked-abroad'] === 'yes') {
    res.redirect('countries-worked');
  } else {
    res.redirect('marital-status');
  }
});


//marital
router.post('/additionalsecurity/marital-status', function(req, res) {
  if (req.body['marital-status'] === 'married') {
    res.redirect('marital-details');
  }
  else if (req.body['marital-status'] === 'divorced') {
    res.redirect('divorce-details');
  }
  else if (req.body['marital-status'] === 'civil') {
    res.redirect('civil-partnership-details');
  }
  else if (req.body['marital-status'] === 'dissolved') {
    res.redirect('ex-civil-partner-details');
  }
  else if (req.body['marital-status'] === 'widowed') {
    res.redirect('late-spouse-details');
  }
  else {
    res.redirect('/additionalsecurity/contact');
  }
});



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



  router.post('/additionalsecurity/alt-formats-choice', (req, res) => {
    res.redirect('/additionalsecurity/payment-bank')
  })
  ;


  router.post('/additionalsecurity/payment-bank', (req, res) => {
    res.redirect('/additionalsecurity/security-check')
  })
  ;

  router.post('/additionalsecurity/security-check', (req, res) => {
    res.redirect('/additionalsecurity/question-1')
  })
  ;

  router.post('/additionalsecurity/question-1', (req, res) => {
    res.redirect('/additionalsecurity/question-2')
  })
  ;

  router.post('/additionalsecurity/question-2', (req, res) => {
    res.redirect('/additionalsecurity/question-3')
  })
  ;

  router.post('/additionalsecurity/question-3', (req, res) => {
    res.redirect('/additionalsecurity/check-successful')
  })
  ;

  router.post('/additionalsecurity/check-successful', (req, res) => {
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

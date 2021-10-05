const express = require('express');
const router = express.Router()


router.post('/bankaccount2/prison', (req, res) => {
  res.redirect('/bankaccount2/lived-abroad')
})
;

router.post('/bankaccount2/lived-abroad', (req, res) => {
  res.redirect('/bankaccount2/worked-abroad')
})
;


router.post('/bankaccount2/worked-abroad', (req, res) => {
  res.redirect('/bankaccount2/marital-status')
})
;

router.post('/bankaccount2/marital-status', (req, res) => {
  res.redirect('/bankaccount2/contact')
})
;

router.post('/bankaccount2/contact', (req, res) => {
  res.redirect('/bankaccount2/alt-formats')
})
;

  // Alt formats yes/no
  router.post('/bankaccount2/alt-formats', function(req, res) {
    if (req.body['alt-formats'] === 'yes') {
      res.redirect('alt-formats-choice');
    } else {
      res.redirect('bank');
    }
  });

  // Payment bank
  router.post('/bankaccount2/bank', (req, res) => {
    res.redirect('/bankaccount2/claimant-bank')
  })
  ;

  router.post('/bankaccount2/claimant-bank', (req, res) => {
    res.redirect('/bankaccount2/check-answers')
  })
  ;

  router.post('/bankaccount2/check-answers', (req, res) => {
    res.redirect('/bankaccount2/declaration')
  })
  ;

  router.post('/bankaccount2/declaration', (req, res) => {
    res.redirect('/bankaccount2/complete')
  })
  ;


  module.exports = router;

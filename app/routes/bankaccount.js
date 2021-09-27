const express = require('express');
const router = express.Router()


router.post('/bankaccount/prison', (req, res) => {
  res.redirect('/bankaccount/lived-abroad')
})
;

router.post('/bankaccount/lived-abroad', (req, res) => {
  res.redirect('/bankaccount/worked-abroad')
})
;


router.post('/bankaccount/worked-abroad', (req, res) => {
  res.redirect('/bankaccount/marital-status')
})
;

router.post('/bankaccount/marital-status', (req, res) => {
  res.redirect('/bankaccount/contact')
})
;

router.post('/bankaccount/contact', (req, res) => {
  res.redirect('/bankaccount/alt-formats')
})
;

  // Alt formats yes/no
  router.post('/bankaccount/alt-formats', function(req, res) {
    if (req.body['alt-formats'] === 'yes') {
      res.redirect('alt-formats-choice');
    } else {
      res.redirect('bank');
    }
  });



  module.exports = router;

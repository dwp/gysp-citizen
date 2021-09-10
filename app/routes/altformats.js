const express = require('express');
const router = express.Router()


router.post('/altformats/prison', (req, res) => {
  res.redirect('/altformats/lived-abroad')
})
;

router.post('/altformats/lived-abroad', (req, res) => {
  res.redirect('/altformats/worked-abroad')
})
;


router.post('/altformats/worked-abroad', (req, res) => {
  res.redirect('/altformats/marital-status')
})
;

router.post('/altformats/marital-status', (req, res) => {
  res.redirect('/altformats/contact')
})
;

router.post('/altformats/contact', (req, res) => {
  res.redirect('/altformats/alt-formats')
})
;

  // Alt formats yes/no
  router.post('/altformats/alt-formats', function(req, res) {
    if ( req.body['alt-formats'] === 'yes' ) {
      res.redirect('alt-formats-choice');
    } else {
      res.redirect('bank');
    }
  });



  module.exports = router;

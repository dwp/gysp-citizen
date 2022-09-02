const express = require('express');
const router = express.Router()



// Confirming identity
router.post('/abroad/iteration-1/confirm-identity', function(req, res) {
  if (req.body['invite-code'] === 'yes') {
    res.redirect('your-details');
  } else {
    res.redirect('request');
  }
});



router.post('/abroad/iteration-1/your-details', (req, res) => {
  res.redirect('/abroad/iteration-1/spa')
})
;

router.post('/abroad/iteration-1/spa', (req, res) => {
  res.redirect('/abroad/iteration-1/lived-abroad')
})
;

  //  Lived abroad yes/no
  router.post('/abroad/iteration-1/lived-abroad', function(req, res) {
    if (req.body['lived-abroad'] === 'yes') {
      res.redirect('lived-country-1');
    } else {
      res.redirect('worked-abroad');
    }
  });

  router.post('/abroad/iteration-1/lived-country-1', (req, res) => {
    res.redirect('/abroad/iteration-1/lived-add-another-country')
  })
  ;




  module.exports = router;

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

  //
  router.post('/abroad/iteration-1/lived-add-another-country', function(req, res) {
    if (req.body['another-lived'] === 'yes') {
      res.redirect('lived-country-2');
    } else {
      res.redirect('worked-abroad');
    }
  });

  router.post('/abroad/iteration-1/lived-country-2', (req, res) => {
    res.redirect('/abroad/iteration-1/lived-add-another-country-2')
  })
  ;

  router.post('/abroad/iteration-1/lived-add-another-country-2', function(req, res) {
    if (req.body['another-lived-2'] === 'yes') {
      res.redirect('lived-country-3');
    } else {
      res.redirect('worked-abroad');
    }
  });

  router.post('/abroad/iteration-1/lived-country-3', (req, res) => {
    res.redirect('/abroad/iteration-1/lived-add-another-country-3')
  })
  ;


  router.post('/abroad/iteration-1/lived-add-another-country-3', function(req, res) {
    if (req.body['another-lived-3'] === 'yes') {
      res.redirect('lived-country-4');
    } else {
      res.redirect('worked-abroad');
    }
  });



  router.post('/abroad/iteration-1/lived-country-1', (req, res) => {
    res.redirect('/abroad/iteration-1/lived-add-another-country')
  })
  ;



  //  Worked abroad yes/no
  router.post('/abroad/iteration-1/worked-abroad', function(req, res) {
    if (req.body['worked-abroad'] === 'yes') {
      res.redirect('worked-country-1');
    } else {
      res.redirect('');
    }
  });

  //
  router.post('/abroad/iteration-1/worked-add-another-country', function(req, res) {
    if (req.body['another-'] === 'yes') {
      res.redirect('-country-2');
    } else {
      res.redirect('worked-abroad');
    }
  });

  router.post('/abroad/iteration-1/-country-2', (req, res) => {
    res.redirect('/abroad/iteration-1/-add-another-country-2')
  })
  ;

  router.post('/abroad/iteration-1/-add-another-country-2', function(req, res) {
    if (req.body['another--2'] === 'yes') {
      res.redirect('-country-3');
    } else {
      res.redirect('worked-abroad');
    }
  });

  router.post('/abroad/iteration-1/-country-3', (req, res) => {
    res.redirect('/abroad/iteration-1/-add-another-country-3')
  })
  ;


  router.post('/abroad/iteration-1/-add-another-country-3', function(req, res) {
    if (req.body['another--3'] === 'yes') {
      res.redirect('-country-4');
    } else {
      res.redirect('worked-abroad');
    }
  });



  router.post('/abroad/iteration-1/-country-1', (req, res) => {
    res.redirect('/abroad/iteration-1/-add-another-country')
  })
  ;



  module.exports = router;

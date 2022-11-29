const express = require('express');
const router = express.Router()



// ------------------------- ITERATION 0 -------------------------

router.post('/abroad/iteration-0/confirm-identity', function(req, res) {
  if (req.body['invite-code'] === 'yes') {
    res.redirect('your-details');
  } else {
    res.redirect('request');
  }
});



router.post('/abroad/iteration-0/your-details', (req, res) => {
  res.redirect('/abroad/iteration-0/spa')
})
;

router.post('/abroad/iteration-0/spa', (req, res) => {
  res.redirect('/abroad/iteration-0/lived-abroad')
})
;

  //  Lived abroad yes/no
  router.post('/abroad/iteration-0/lived-abroad', function(req, res) {
    if (req.body['lived-abroad'] === 'yes') {
      res.redirect('lived-countries');
    } else {
      res.redirect('worked-abroad');
    }
  });

  router.post('/abroad/iteration-0/lived-countries', (req, res) => {
    res.redirect('/abroad/iteration-0/lived-country-1')
  })
  ;


  router.post('/abroad/iteration-0/lived-country-1', (req, res) => {
    res.redirect('/abroad/iteration-0/worked-abroad')
  })
  ;

  //
  router.post('/abroad/iteration-0/lived-add-another-country', function(req, res) {
    if (req.body['another-lived'] === 'yes') {
      res.redirect('lived-country-2');
    } else {
      res.redirect('worked-abroad');
    }
  });


  router.post('/abroad/iteration-0/lived-add-another-country-2', function(req, res) {
    if (req.body['another-lived-2'] === 'yes') {
      res.redirect('lived-country-3');
    } else {
      res.redirect('worked-abroad');
    }
  });




  //  Worked abroad yes/no
  router.post('/abroad/iteration-0/worked-abroad', function(req, res) {
    if (req.body['worked-abroad'] === 'yes') {
      res.redirect('worked-countries');
    } else {
      res.redirect('marital-status');
    }
  });




// ------------------------- ITERATION 1 -------------------------------

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
      res.redirect('marital-status');
    }
  });

  router.post('/abroad/iteration-1/worked-country-1', (req, res) => {
    res.redirect('/abroad/iteration-1/worked-add-another-country')
  })
  ;

  //
  router.post('/abroad/iteration-1/worked-add-another-country', function(req, res) {
    if (req.body['another-worked'] === 'yes') {
      res.redirect('worked-country-2');
    } else {
      res.redirect('marital-status');
    }
  });

  router.post('/abroad/iteration-1/worked-country-2', (req, res) => {
    res.redirect('/abroad/iteration-1/worked-add-another-country-2')
  })
  ;

  router.post('/abroad/iteration-1/worked-add-another-country-2', function(req, res) {
    if (req.body['another-worked-2'] === 'yes') {
      res.redirect('worked-country-3');
    } else {
      res.redirect('marital-status');
    }
  });

  router.post('/abroad/iteration-1/worked-country-3', (req, res) => {
    res.redirect('/abroad/iteration-1/worked-add-another-country-3')
  })
  ;


  router.post('/abroad/iteration-1/worked-add-another-country-3', function(req, res) {
    if (req.body['another-worked-3'] === 'yes') {
      res.redirect('worked-country-4');
    } else {
      res.redirect('marital-status');
    }
  });



  router.post('/abroad/iteration-1/worked-country-1', (req, res) => {
    res.redirect('/abroad/iteration-1/worked-add-another-country')
  })
  ;



  module.exports = router;

const express = require('express');
const router = express.Router()


// Invite code or GOV.UK Verify

router.post('/invite-request/invitation-code', function(req, res) {
  if (req.body['confirm-identity'] === 'code') {
    res.redirect('invite-code');
  } else {
    res.redirect('request-invitation-code');
  }
});


// Invite to name
router.post('/invite-request/request-invitation-code', (req, res) => {
  res.redirect('/invite-request/your-name')
})
;

// Name to DOB
router.post('/invite-request/your-name', (req, res) => {
  res.redirect('/invite-request/date-of-birth')
})
;

// DOB for too young


router.post('/invite-request/date-of-birth', function(req, res) {
  if (req.session.data["year"] === "1955") {
    res.redirect('cannot-request-code');
  } else {
    res.redirect('home-address');
  }
});


router.post('/invite-request/home-address', (req, res) => {
  res.redirect('/invite-request/no-addresses-found')
})
;




// router.post('/invite-request/home-address', function(req, res) {
//  if (req.body['address-search-postcode'] === 'NL12 8JK') {
//    res.redirect('no-addresses-found');
//    }
//    else if (req.body['address-search-postcode'] === 'nl12 8jk') {
//      res.redirect('no-addresses-found');
//    }
//    else if (req.body['address-search-postcode'] === 'nl128jk') {
//      res.redirect('no-addresses-found');
//    }
//    else if (req.body['address-search-postcode'] === 'NL12 8JK') {
//      res.redirect('no-addresses-found');
//    }
//    else {
//      res.redirect('confirm-full-address');
//    }
//});

  //
  router.post('/invite-request/no-addresses-found', (req, res) => {
    res.redirect('/invite-request/home-address')
  })
  ;


router.post('/invite-request/confirm-full-address', function(req, res) {
  if (req.body['where-do-you-live'] === 'manual') {
    res.redirect('what-is-your-address');
  } else {
    res.redirect('check-details-code');
  }
});

// manual address to CYA
router.post('/invite-request/what-is-your-address', (req, res) => {
  res.redirect('/invite-request/check-details-code')
})
;


router.post('/invite-request/check-details-code', function(req, res) {
  if (req.session.data["address-search-postcode"] === "NL12 8JK") {
    res.redirect('need-to-call-us');
  }
  else if (req.session.data['address-search-postcode'] === 'nl12 8jk') {
    res.redirect('need-to-call-us');
  }
  else {
    res.redirect('code-requested');
  }
});



  module.exports = router;

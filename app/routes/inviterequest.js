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
  if (req.session.data["year"] === "1957") {
    res.redirect('cannot-request-code');
  } else {
    res.redirect('home-address');
  }
});

  module.exports = router;

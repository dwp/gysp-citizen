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

  module.exports = router;

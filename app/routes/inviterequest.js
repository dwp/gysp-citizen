const express = require('express');
const router = express.Router()


// Invite code or GOV.UK Verify

router.post('/invite-request/confirm-identity', function(req, res) {
  if (req.body['confirm-identity'] === 'code') {
    res.redirect('invite-code');
  } else {
    res.redirect('invite-code-request');
  }
});

  module.exports = router;

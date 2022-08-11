const express = require('express');
const router = express.Router()

//if matched go to confrm-address4, if unmatched go to confirm-address2

router.post('/validate-addresses/your-details', function(req, res) {
  if ( req.body['text'] === 'UM' ) {
    res.redirect('confirm-address2');
  } else {
    res.redirect('confirm-address4');
  }
});


  module.exports = router;

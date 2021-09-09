const express = require('express');
const router = express.Router()


  // Alt formats yes/no
  router.post('/altformats/alt-formats', function(req, res) {
    if ( req.body['alt-formats'] === 'yes' ) {
      res.redirect('alt-formats-choice');
    } else {
      res.redirect('bank');
    }
  });



  module.exports = router;

const express = require('express');
const router = express.Router()


// Language write to large print

router.post('/welsh/language-write', function(req, res) {
  if (req.body['language-write'] === 'yes') {
    res.redirect('alt-formats');
  } else {
    res.redirect('large-print');
  }
});


  module.exports = router;

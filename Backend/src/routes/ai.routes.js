const express = require('express');

const router = express.router();

router.get("./get-response" , aiController.getResponse);

module.exports = router ;
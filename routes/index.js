'use strict';

const { Router } = require('express');
const router = Router();

router.use(require('./list-route'));
router.use(require('./login-route'));
// router.use(require('./upload-route'));

module.exports = router;
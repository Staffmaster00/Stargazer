'use strict';

const { Router } = require('express');
const router = Router();

const { createUser } = require('../route-controllers/LoginControllerNode');

// router.get('/login', showLogin)
router.post('/login', createUser);


module.exports = router;
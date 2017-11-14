'use strict';

const { Router } = require('express');
const router = Router();

const { registerUser, loginUser } = require('../route_controllers/LoginControllerNode');

router.post('/login', loginUser);
router.post('/register', registerUser);


module.exports = router;
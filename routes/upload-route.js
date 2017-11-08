'use strict';

const { Router } = require('express');
const router = Router();

const { createPhoto } = require('../route_controllers/UploadControllerNode');

router.post('/upload', createPhoto);


module.exports = router;
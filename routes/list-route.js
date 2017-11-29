'use strict';

const { Router } = require('express');
const router = Router();

const { fetchPhotos, fetchOnePhoto, fetchUserPhoto } = require('../route_controllers/ListControllerNode');


router.get('/list', fetchPhotos);
router.get('/list/:id', fetchOnePhoto);
router.get('/list/user/list', fetchUserPhotos);
router.get('/list/user/:id', fetchUserPhoto);


module.exports = router;
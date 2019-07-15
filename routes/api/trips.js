const express = require('express');
const Trip = require('../../models/trip');
const User = require('../../models/user');
const router = new express.Router();
const tripCtrl = require('../../controllers/trips');

router.get('/dashboard/', tripCtrl.index);
router.get('/dashboard/:id', tripCtrl.show);
router.get('/users/:id/dashboard/new', tripCtrl.new);
router.post('/users/:id/create/', tripCtrl.create);
router.get('/edit/:id/edit', tripCtrl.edit);
router.put('/edit/:id', tripCtrl.update);
router.delete('/dashboard/', tripCtrl.delete);

module.exports = router;

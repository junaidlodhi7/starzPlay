const express = require('express');
const router = express.Router();
const parkingRoutes = require('./parking/routes')

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

router.use('/media', parkingRoutes);
module.exports = router;
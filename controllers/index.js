const router = require('express').Router();

const clickRoutes = require('./api/clickRoutes');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/api', clickRoutes);

module.exports = router;
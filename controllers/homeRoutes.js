const router = require('express').Router();
const Click = require('../models/Click');

router.get('/', async (req, res) => {
    try {
        const clickData = await Click.findAll()
        const clicks = clickData.map((clicks) => clicks.get({plain: true}))
        console.log('num of clicks: ', clicks)
        res.render('index', {clicks})
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;

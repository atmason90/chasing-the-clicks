const router = require('express').Router();
const Click = require('../../models/Click');

router.post('/click', async (req, res) => {
    const body = req.body;
    try {
        const newClick = await Click.create(body)
        res.json(newClick)
    } catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
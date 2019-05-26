const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

router.get('/health', (req, res) => {
    res.json({ test: true });
});

const test = [];

router.get('/test', (req, res) => {
    res.json(test);
});

router.get('/test/:id', (req, res) => {
    const { params } = req;
    const { id } = params;

    const value = test[id];
    if (!value) {
        res.sendStatus(404);
        return;
    }
    res.json(value);
});

router.post('/test', bodyParser.json(), (req, res) => {
    const artifact = req.body;
    test.push(artifact);
    res.sendStatus(204);
});


router.delete('/test/:id', (req, res) => {
    const { params } = req;
    const { id } = params;
    test.splice(id, 1);
    res.sendStatus(204);
});


module.exports = router;

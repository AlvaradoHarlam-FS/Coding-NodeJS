const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'GET - SUCCESSFUL',
        methadata: {
            hostname: req.hostname,
            method: req.method
        },
    });
});

router.get('/:id', (req, res) => {
const id = req.params.id
res.status(200).json({
    message: 'GET - SUCCESSFUL',
    id: id,
    methadata: {
        hostname: req.hostname,
        method: req.method,
    },
});
});

module.exports = router;

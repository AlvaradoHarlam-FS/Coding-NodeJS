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
    message: 'GET 4- SUCCESSFUL',
    id: id,
    methadata: {
        hostname: req.hostname,
        method: req.method,
    },
});
});

 // POST
router.post("/", (req, res) => {
    res.status(200).json({
        message: 'POST - FAILED',
        metadata: {
            host:req.hostname,
            port:req.socket.localPort,
            method: req.method
        }
    })
});

// PATCH
router.patch("/:id", (req, res) => {
    const id= req.params.id;
    res.status(200).json({
        message: 'POST - PATCH',
        id: id,
        metadata: {
            host:req.hostname,
            port:req.socket.localPort,
            method: req.method
        }
    })
});

// DELETE
router.delete("/:id", (req, res) => {
    const id= req.params.id;
    res.status(200).json({
        message: 'POST - delete',
        id: id,
        metadata: {
            host:req.hostname,
            port:req.socket.localPort,
            method: req.method
        }
    })
});
  
  
  
module.exports = router;

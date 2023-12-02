const express = require('express');

const router = express.Router();

router.get('/user', (req, res) => {
    res.send('User Page');
    }
);

router.get('/user/:id', (req, res) => {
    res.send(`User Page with id ${req.params.id}`);
    }
);

router.post('/user', (req, res) => {
    res.send('User Page');
    }
);


module.exports = router;
const express = require('express');

const router = express.Router();
const UserService = require('../services/user');

router.get('/user', (req, res) => {
    UserService.getUsers().then((users) => {
        res.json(users);
    }).catch((err) => {
        res.status(500).json({ error: err });
    });
}
);

router.get('/user/:id', (req, res) => {
    UserService.getUserById(req.params.id).then((user) => {
        res.json(user);
    }).catch((err) => {
        res.status(500).json({ error: err });
    });
}
);

router.post('/user', (req, res) => {
    UserService.addUser(req.body).then(() => {
        res.json({ success: true });
    }).catch((err) => {
        res.status(500).json({ error: err });
    });
}
);


module.exports = router;
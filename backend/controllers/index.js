const express = require('express');

const router = express.Router();

const home = require('./home');
const about = require('./about');
const user = require('./user');
const book = require('./book');
const { log } = require('console');

// router.get('/', (req, res) => {
//     const result = {
//         status: 200,
//         message: 'Express API server is healthy',
//         "routes": [
//             {
//                 "name": "home",
//                 "url": "/api/home"
//             },
//             {
//                 "name": "about",
//                 "url": "/api/about"
//             },
//             {
//                 "name": "user",
//                 "url": "/api/user"
//             },
//             {
//                 "name": "book",
//                 "url": "/api/book"
//             }
//         ]
//     };
//     res.json(result);
// });

router.use('/api', home);
router.use('/api', about);
router.use('/api', user);
router.use('/api', book);

module.exports = router;
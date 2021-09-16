const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{ res.status(200).json({"data":"API1 Hola!"})})
router.get('/flights', (req, res)=>{ res.status(200).json({"data":"This is response for flights" })});
router.get('/users', (req, res)=>{ res.status(200).json({"data":"This is response for users" })});
router.get('/purchase', (req, res)=>{ res.status(200).json({"key":"123456" })});
router.get('/info', (req, res) => {res.status(200).json({
    response: [
            {
                "data" : {
                routePath: "/flights",
                response: {data:'This is response for flights'}
                }
            },
            {
                "data" : {
                routePath: "/users",
                response: {data:'This is response for users'}
                }
            }
        ]
    })
})
module.exports = router;
const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{ res.status(200).json({"data":"API1 Hola!"})})
router.get('/engines', (req, res)=>{ res.status(200).json({"data":"This is response for engines" })});
router.get('/wings', (req, res)=>{ res.status(200).json({"data":"This is response for wings" })});
router.get('/purchase', (req, res)=>{ res.status(200).json({"key":"abcdefg" })});
router.get('/info', (req, res) => {res.status(200).json({
    response: [
            {
                "data" : {
                routePath: "/engines",
                response: {data:'This is response for engines'}
                }
            },
            {
                "data" : {
                routePath: "/wings",
                response: {data:'This is response for wings'}
                }
            }
        ]
    })
})
module.exports = router;
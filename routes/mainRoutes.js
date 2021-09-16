const express = require('express');

const api1Routes = require('./api1Routes')
const api2Routes = require('./api2Routes')
const router = express.Router();

router.use('/api1/', api1Routes);
router.use('/api2/', api2Routes);
router.use('/routesInfo', (req, res) => { res.status(200).json({routes: ['/api1', '/api2']})})
router.get('/', (req, res)=>{ res.status(200).json({"data":"HOLA!"})})

module.exports = router;
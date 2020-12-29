const express = require('express');
const router = express.Router();
const RabbitMQController = require('../controllers/rabbitMq.controller');
const RabbitMQInstance = new RabbitMQController();

/* GET  Queue Message */
router.get('/', async(req, res, next) => {
    try {
        res.status(200).send(await RabbitMQInstance.getMessage());
    } catch (e) {
        res.status(500).send({ status: 'error', message: e.message });
    }

});

/** START/STOP Pushing Message to queue*/
router.post('/', async(req, res, next) => {
    try {
        let mode = req.query.mode;
        res.status(200).send(await RabbitMQInstance.publishMessage(mode));
    } catch (e) {
        res.status(500).send({ status: 'error', message: e.message });
    }

});

module.exports = router;
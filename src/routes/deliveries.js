const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Delivery = require('../models/Delivery');

router.get('/', async (req, res) => {
    try {
        const deliveries = await Delivery.find({});
        console.log(deliveries);
        res.status(200).json(deliveries);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
});

router.post('/', async (req, res) => {
    console.log(req.body);

    const delivery = new Delivery({
        _id: new mongoose.Types.ObjectId(),
        client_name: req.body.client_name,
        weight_kg: req.body.weight_kg,
        address: {
            public_place: req.body.public_place,
            number: req.body.number,
            neighborhood: req.body.neighborhood,
            complement: req.body.complement,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country
        }
    });

    try {
        const savedDelivery = await delivery.save();
        res.status(204).json(savedDelivery);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }

});

module.exports = router;
const mongoose = require('mongoose');

const deliverySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    client_name: String,
    weight_kg: Number,
    address: {
        public_place: String,
        number: Number,
        neighborhood: String,
        complement: String,
        city: String,
        state: String,
        country: String,
        geolocation: {
            latitude: Number,
            longitude: Number
        }
    }
});

module.exports = mongoose.model('Deliveries', deliverySchema);
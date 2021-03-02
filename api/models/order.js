const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    //product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    //quantity: { type: Number, default: 1 },
    cart: Array,
    dateOrdered: Date,
    expectedDelivery: Date,
    dateDelivered: Date
});

module.exports = mongoose.model('Order', orderSchema);
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },

	addresses: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Address", required: true }],
	orders: [
		{
			type: mongoose.SchemaTypes.ObjectId,
			ref: "Order",
			required: true,
		},
	],

	cart: new Schema({
		products: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Product", required: true }],
	}),
});

const Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;

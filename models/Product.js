import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  description: { type: String, default: "" },
  image: { type: String, required: true }
}, {
    timestamps: true
})

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema)
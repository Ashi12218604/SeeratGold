import mongoose from 'mongoose';

const comboSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    nameHi: { type: String, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    images: [{ type: String }],
    price: { type: Number },
    mrp: { type: Number },
    weightOptions: [
      {
        weight: { type: String, required: true },
        price: { type: Number, required: true },
        mrp: { type: Number },
      },
    ],
    tags: [{ type: String }],
    isFeatured: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

comboSchema.index({ slug: 1 });

const Combo = mongoose.model('Combo', comboSchema);

export default Combo;

import mongoose from 'mongoose';

const offerSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    titleHi: { type: String, trim: true },
    description: { type: String },
    type: {
      type: String,
      required: true,
      enum: ['percentage', 'bundle', 'seasonal', 'first-order'],
    },
    value: { type: Number },
    applicableProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    applicableCategories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
    bannerImage: { type: String },
    validFrom: { type: Date },
    validUntil: { type: Date },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

offerSchema.index({ isActive: 1, validFrom: 1, validUntil: 1 });

const Offer = mongoose.model('Offer', offerSchema);

export default Offer;

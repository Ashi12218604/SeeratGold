import mongoose from 'mongoose';

const settingSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true, trim: true },
    value: { type: mongoose.Schema.Types.Mixed, required: true },
    group: {
      type: String,
      required: true,
      enum: ['contact', 'social', 'general'],
    },
  },
  { timestamps: true }
);

settingSchema.index({ key: 1 });
settingSchema.index({ group: 1 });

const Setting = mongoose.model('Setting', settingSchema);

export default Setting;

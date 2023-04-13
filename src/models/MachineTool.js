import mongoose from "mongoose";

const MachineToolSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    subCategory: {
      type: String,
      require: true,
    },
    publish: {
      type: Boolean,
      default: true,
    },
    photos: {
      type: Array,
      require: false,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("MachineTools", MachineToolSchema);

const mongoose = required("mongoose");
var Schema = mongoose.Schema;
const categorySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Category", categorySchema);
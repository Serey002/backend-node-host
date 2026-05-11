import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number
  },
  email: {
    type: String
  }
});

export default mongoose.model("User", UserSchema);

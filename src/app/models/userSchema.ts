import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
{
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},
{ timestamps: true }
);

const User = models.users || mongoose.model("users", userSchema)
export default User;

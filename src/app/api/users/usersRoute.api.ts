import { connectMongoDB } from "../mongodb/mongodbconnection";
import {UserType} from "@/app/models/user"
import bcrypt from "bcryptjs";
import User from "@/app/models/userSchema";
import generateToken from "../jwt/tokenGenerator"

export async function registerUser(user: UserType) {
  try {
    const { name, email, password } = user
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    await User.create({ name, email, password: hashedPassword });

    return true
  } catch(error: any) {
    console.error("Error while creating user:", error.message);
    return false;
  }
}

export async function loginUser(user: UserType) {
  try {
      const { name, email, password} = user
      await connectMongoDB();
      const res = await User.findOne({ email });

      if (!user) {
        return res.status(404).json({
          error: "User not found",
        });
      }
      const isValid = await bcrypt.compare(password, res.password);
      if (!isValid) {
        return res.status(401).json({
          error: "Invalid password",
        });
      }
      const token = await generateToken({ _id: res._id, name: res.name, email: res.email });
      console.log(">>>>>>token", token)
      return res;
  } catch(error: any) {
    console.error("Error while creating user:", error.message);
    return false;
  }
}
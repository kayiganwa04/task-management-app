import { connectMongoDB } from "../mongodb/mongodbconnection";
import {UserType} from "@/app/models/user"
import bcrypt from "bcryptjs";
import User from "@/app/models/userSchema";

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
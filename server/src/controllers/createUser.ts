import mongoose from "mongoose";
import {User, UserDocument } from "../models/User";


async function createUser(email: string, password: string, username: string): Promise<UserDocument | null> {
  try {
    
    const newUser = new User({
      email,
      password,
      username,
    });

    newUser.password = await newUser.encryptPassword();

    const savedUser = await newUser.save();

    console.log("User created:", savedUser);
    return savedUser;
  } catch (error) {
    console.error("Error creating user:", error.message);
    return null;
  }
}

mongoose.connect(process.env.DB_URL as string)

export default createUser;
import mongoose, { Document, Schema } from "mongoose";

interface UserAttributes {
  email: string;
  password: string;
}

interface UserDocument extends UserAttributes, Document {}

const userSchema = new Schema<UserDocument>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (value: string) => /\S+@\S+\.\S+/.test(value),
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => /\d/.test(value),
        message: "Password must contain at least one digit",
      },
    },
  },
  {
    timestamps: true,
    collection: "Users", 
  }
);

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;
import mongoose, { Document, Schema } from "mongoose";

interface UserAttributes {
  email: string;
  password: string;
  username: string;
  deleted: boolean;
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
    username: {
      type: String,
      required: true,  
    },
    deleted: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
    collection: "Users", 
  }
);

const User = mongoose.model<UserDocument>("User", userSchema);

export default User;
import mongoose, { Document, Schema } from "mongoose";
import bcrypt from 'bcrypt';

interface UserAttributes {
  email: string;
  password: string;
  username: string;
  deleted: boolean;
}

interface UserDocument extends UserAttributes, Document {
  encryptPassword: () => Promise<string>;
  validatePassword: (password: string) => Promise<boolean>;
  softDelete: () => Promise<UserDocument>;
  restore: () => Promise<UserDocument>;
}

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

userSchema.methods.encryptPassword = async function () {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(this.password, salt);
};

userSchema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password)
};

userSchema.methods.softDelete = function() {
  this.deleted = true;
  return this.save();
};

userSchema.methods.restore = function() {
  this.deleted = false;
  return this.save();
}

const User = mongoose.model<UserDocument>("User", userSchema);

export {User, UserDocument};
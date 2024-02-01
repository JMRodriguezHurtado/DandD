import mongoose, { Document, Schema } from 'mongoose';

interface CharactersAttributes {
  name: string;
  atributes: {};
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  class: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: string;
  image: string;
}

interface CharactersDocument extends CharactersAttributes, Document {}

const charactersSchema = new Schema<CharactersDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['Alive', 'Dead', 'unknown'],
      required: true,
    },
    species: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Female', 'Male', 'Genderless', 'unknown'],
      required: true,
    },
    origin: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    collection: 'Characters', 
  }
);

const Characters = mongoose.model<CharactersDocument>('Characters', charactersSchema);

export default Characters;
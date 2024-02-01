import mongoose, { Document, Schema } from 'mongoose';

interface CharactersAttributes {
  name: string;
  age: number;
  height: number;
  weight: number;
  eyes: string;
  skin: string;
  hair: string;
  spells: {
    first: string;
    second: string;
    third: string;
    fourth: string;
    fifth: string;
    sixth: string;
    seventh: string;
    eighth: string;
    ninth: string;
    tenth: string;
    eleventh: string;
    twelveth: string;
    thirteenth: string;
    fourteenth: string;
    fifteenth: string;
    sixteenth: string;
    seventeenth: string;
    eighteenth: string;
    nineteenth: string;
    twentyth: string;
  };
  attributes: {
    Strenght: number;
    Dexterity: number;
    Constitution: number;
    Intelligence: number;
    Wisdom: number;
    Charisma: number;
  };
  skills: {
    Acrobatics: number;
    AnimalHandling: number;
    Arcana: number;
    Athletics: number;
    Deception: number;
    History: number;
    Insight: number;
    Intimidation: number;
    Investigation: number;
    Medicine: number;
    Nature: number;
    Perception: number;
    Performance: number;
    Persuasion: number;
    Religion: number;
    SleightOfHand: number;
    Stealth: number;
    Survival: number;
  };
  armor: number;
  speed: number;
  initiative: number;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  class: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: string;
  personalityTraits: string;
  ideals: string;
  bonds: string;
  flaws: string;
  alignment: 'Lawful Good' | 'Neutral Good' | 'Chaotic Good' | 'Lawful Neutral' | 'True Neutral' | 'Chaotic Neutral' | 'Lawful Evil' | 'Neutral Evil' | 'Chaotic Evil';
  image: string;
}

interface CharactersDocument extends CharactersAttributes, Document {}

const charactersSchema = new Schema<CharactersDocument>(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    eyes: {
      type: String,
      required: true,
    },
    skin: {
      type: String,
      required: true,
    },
    hair: {
      type: String,
      required: true,
    },
    spells: {
      type: {
        first: String,
        second: String,
        third: String,
        fourth: String,
        fifth: String,
        sixth: String,
        seventh: String,
        eighth: String,
        ninth: String,
        tenth: String,
        eleventh: String,
        twelveth: String,
        thirteenth: String,
        fourteenth: String,
        fifteenth: String,
        sixteenth: String,
        seventeenth: String,
        eighteenth: String,
        nineteenth: String,
        twentyth: String,
      },
      required: true,
    },
    attributes: {
      type: {
        Strenght: Number,
        Dexterity: Number,
        Constitution: Number,
        Intelligence: Number,
        Wisdom: Number,
        Charisma: Number,
      },
      required: true,
    },
    skills: {
      type: {
        Acrobatics: Number,
        AnimalHandling: Number,
        Arcana: Number,
        Athletics: Number,
        Deception: Number,
        History: Number,
        Insight: Number,
        Intimidation: Number,
        Investigation: Number,
        Medicine: Number,
        Nature: Number,
        Perception: Number,
        Performance: Number,
        Persuasion: Number,
        Religion: Number,
        SleightOfHand: Number,
        Stealth: Number,
        Survival: Number,
      },
      required: true,
    },
    armor: {
      type: Number,
      required: true,
    },
    speed: {
      type: Number,
      required: true,
    },
    initiative: {
      type: Number,
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
    personalityTraits: {
      type: String,
      required: true,
    },
    ideals: {
      type: String,
      required: true,
    },
    bonds: {
      type: String,
      required: true,
    },
    flaws: {
      type: String,
      required: true,
    },
    alignment: {
      type: String,
      enum: [
        'Lawful Good',
        'Neutral Good',
        'Chaotic Good',
        'Lawful Neutral',
        'True Neutral',
        'Chaotic Neutral',
        'Lawful Evil',
        'Neutral Evil',
        'Chaotic Evil',
      ],
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
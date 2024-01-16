
import Characters from '../models/Characters';

const getCharById = async (id: string) => {
  try {
    const character = await Characters.findById(id);

    if (!character) {
      throw new Error ("Character not found");
    }
    return character;
  }
  catch (error) {
    if (error instanceof Error) { 
    console.error('Error fetching character:', error.message);
    } else {
      console.error('An unknown error occurred while fetching the character');
    }
    throw new Error('Unable to fetch character');
  }
}

export default getCharById;
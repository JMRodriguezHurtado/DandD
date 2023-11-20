import { Request, Response } from "express";
import { sequelize } from "../DB_connection";
import CharactersModel from "../models/characters";

const Characters = CharactersModel(sequelize);

async function getCharById(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const character = await Characters.findOne({ where: { id } });

    if (character) {
      const characterDetails = {
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        class: character.class,
        gender: character.gender,
        origin: character.origin,
        image: character.image,
      };

      res.status(200).json(characterDetails);
    } else {
      res.status(404).json({ message: "Not Found Coleguillas" });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: "An unknown error occurred." });
    }
  }
}

export default getCharById;
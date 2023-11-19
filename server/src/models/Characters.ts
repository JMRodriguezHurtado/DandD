import { DataTypes, Model, Sequelize } from "sequelize";

interface CharactersAttributes {
  id: number;
  name: string;
  status: "Alive" | "Dead" | "unknown";
  species: string;
  class: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
  origin: string;
  image: string;
}

export default (sequelize: Sequelize) => {
  class Characters extends Model<CharactersAttributes> implements CharactersAttributes {
    id!: number;
    name!: string;
    status!: "Alive" | "Dead" | "unknown";
    species!: string;
    class!: string;
    gender!: "Female" | "Male" | "Genderless" | "unknown";
    origin!: string;
    image!: string;
  }

  Characters.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Alive", "Dead", "unknown"),
        allowNull: false,
      },
      species: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      class: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("Female", "Male", "Genderless", "unknown"),
        allowNull: false,
      },
      origin: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "Characters",
    }
  );

  return Characters;
};
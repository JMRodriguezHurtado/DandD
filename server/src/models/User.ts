import { DataTypes, Model, Sequelize } from "sequelize";

interface UserAttributes {
  id: number;
  email: string;
  password: string;
}

export default (sequelize: Sequelize) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    id!: number;
    email!: string;
    password!: string;
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /\d/,
        },
      },
    },
    {
      sequelize,
      paranoid: true,
      modelName: "User",
    }
  );

  return User;
};
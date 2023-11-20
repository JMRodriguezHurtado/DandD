import dotenv from "dotenv";
import { Sequelize } from "sequelize";
import fs from 'fs';
import path from 'path';

dotenv.config();

const {
  DB_USER, DB_PASSWORD,
} = process.env;

if (!DB_USER || !DB_PASSWORD ) {
  throw new Error("Please provide all required database environment variables.");
}

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@localhost:5432/dandd`, {
  logging: false,
  native: false,
});

const basename = path.basename(__filename);

const modelDefiners: any[] = [];

fs.readdirSync(path.join(__dirname, 'models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts'))
  .forEach((file) => {
    const modelDefiner = require(path.join(__dirname, 'models', file)).default;
    modelDefiners.push(modelDefiner(sequelize));
  });

const models: any = {};

modelDefiners.forEach(model => {
  const modelName = model.name.charAt(0).toUpperCase() + model.name.slice(1);
  models[modelName] = model;
});

const { User, Characters } = models;

User.hasMany(Characters, { foreignKey: "userId", sourceKey: "id" });
Characters.belongsTo(User, { foreignKey: "userId", targetKey: "id" });

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export { sequelize, models };
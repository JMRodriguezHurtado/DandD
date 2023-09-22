require("dotenv").config();
const {Sequelize} = require("sequelize");
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Characters");
const Characters = require("./models/Characters");

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`,
  {logging: false, native: false}
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

UserModel(sequelize);
CharacterModel(sequelize);
//

//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const {User, Characters} = sequelize.models;

User.belongsToMany(Characters, {through: "user_characters"});
Characters.belongsToMany(User, {through: "user_characters"});

module.exports = {
  User,
  Characters,
  conn: sequelize,
};

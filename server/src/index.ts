import app from "./app";
import { sequelize } from "./DB_connection";

const PORT = 3001;

app.listen(PORT, () => {
  sequelize.sync({ force: true });
  console.log(`Server raised on port: ${PORT}`);
});

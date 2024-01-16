import mongoose from 'mongoose';

(async () => {
  try {
    await mongoose.connect(process.env.DB_URL as string, {
    });
    console.log("DB connected to", mongoose.connection.name);
  } catch (error) {
    console.log(error);
  }
})();
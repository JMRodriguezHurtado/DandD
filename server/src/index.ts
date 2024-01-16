import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3001;

try {
  app.listen(PORT, () => {
    console.log(`Server raised in: http://localhost:${PORT}`);
  });
} catch (error) {
  console.log(error);
}
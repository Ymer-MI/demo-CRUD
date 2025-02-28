import dotenv from 'dotenv';
import express from 'express';
import todoRoutes from './routes/todoRoutes.mts';

dotenv.config();

const app = express().use(express.json()), PORT = process.env.PORT || 3000;

app.use('/todos', todoRoutes);

app.get('/ping', (_, res) => {
  res.status(200).send('Server is alive!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
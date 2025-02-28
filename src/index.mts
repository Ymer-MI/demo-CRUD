import express from 'express';
import todoRoutes from './routes/todoRoutes.mts';

const app = express().use(express.json()), PORT = 3000;

app.use('/todos', todoRoutes);

app.get('/ping', (_, res) => {
  res.status(200).send('Server is alive!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
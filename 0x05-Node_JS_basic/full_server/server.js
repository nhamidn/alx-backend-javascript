import express from 'express';
import routes from './routes/index.js';

const app = express();
app.locals.dbPath = process.argv[2];

app.use('/', routes);

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;

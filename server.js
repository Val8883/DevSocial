import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 888;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
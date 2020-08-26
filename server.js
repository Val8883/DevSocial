import express from 'express';
import connectDB from './config/db.js';

const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

// Define Routes

const PORT = process.env.PORT || 8883;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

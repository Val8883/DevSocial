import express from 'express';
import connectDB from './config/db.js';

import usersRoute from './routes/api/users.js';
import postsRoute from './routes/api/posts.js';
import profileRoute from './routes/api/profile.js';
import authRoute from './routes/api/auth.js';

import doteenv from 'dotenv';

// Connect .env
doteenv.config();

const app = express();

// Connect Database
connectDB();

//Inint MIddleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  return res.send(process.env.DB_MONGO_URI);
});

// Define Routes
app.use('/api/users', usersRoute);
app.use('/api/posts', postsRoute);
app.use('/api/profile', profileRoute);
app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 8883;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

import express from 'express';
import doteenv from 'dotenv';
import chalk from 'chalk';

import connectDB from './config/db.js';

import usersRoute from './routes/api/users.js';
import postsRoute from './routes/api/posts.js';
import profileRoute from './routes/api/profile.js';
import authRoute from './routes/api/auth.js';

export const app = express();

// Connect .env
doteenv.config();

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

app.listen(PORT, () =>
  console.log(chalk.blue(`Server started on port ${PORT}`))
);

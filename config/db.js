import mongoose from 'mongoose';
import chalk from 'chalk';

// Mongo Client Constructor
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, options);
    console.log(chalk.blue('DB connected'));
  } catch (err) {
    console.error(err.message);
    //Exit
    process.exit(1);
  }
};

export default connectDB;

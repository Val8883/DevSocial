import mongoose from 'mongoose';
import doteenv from 'dotenv';

doteenv.config();

// Mongo Client Constructor
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO_URI, options);
    console.log('DB is Connected!');
  } catch (err) {
    console.error(err.message);
    //Exit
    process.exit(1);
  }
};

export default connectDB;

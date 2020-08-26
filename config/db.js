import mongoose from 'mongoose';
import config from 'config';

const db = config.get('mongoURI');

// Mongo Client Constructor
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(db, options);

    console.log('DB is Connected!');
  } catch (err) {
    console.error(err.message);
    //Exit
    process.exit(1);
  }
};

export default connectDB;

import mongoose, { connect } from 'mongoose';

mongoose.connect('mongodb://localhost:27017/note-keeper', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (error) => console.log(error));

mongoose.connection.on('connected', () => console.log('DB is connected'));

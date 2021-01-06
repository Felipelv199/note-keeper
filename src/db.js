import { connect, connection } from 'mongoose';

connect('mongodb://localhost:27017/note-keeper', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connection.on('error', (error) => console.error(error));

connection.once('open', () => console.log('DB is connected'));

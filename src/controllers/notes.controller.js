import Note from '../models/Note';

export const getNotes = (req, res) => {
  res.send('Notes');
};

export const createNote = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    res.status(400).json({ message: 'Note info missing' });
    return;
  }
  const newNote = new Note({ title, content });
  await newNote.save();
  res.json({ message: 'Note Created', newNote });
};

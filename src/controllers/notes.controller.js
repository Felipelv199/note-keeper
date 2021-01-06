export const getNotes = (req, res) => {
  res.send('Notes');
};

export const createNote = (req, res) => {
  res.json({ message: 'Note Created', ...req.body });
};

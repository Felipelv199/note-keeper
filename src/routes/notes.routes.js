import { Router } from 'express';
import { createNote, getNotes } from '../controllers/notes.controller';

const router = Router();

router.get('/', getNotes);

router.post('/', createNote);

router.get('/*', (req, res) => {
  res.status(404);
  res.send('Page Not Found');
});

export default router;

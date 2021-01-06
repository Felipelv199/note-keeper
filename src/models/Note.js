import { model, Schema } from 'mongoose';

const NoteSchema = new Schema(
  {
    title: { type: String },
    content: { type: String },
  },
  { timestamps: true }
);

export default model('Notes', NoteSchema);

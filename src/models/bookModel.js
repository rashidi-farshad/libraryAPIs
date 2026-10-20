import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    minLength: 4,
    maxLength: 150,
    required: true,
  },
  author: {
    type: String,
    minLength: 4,
    maxLength: 150,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const book = mongoose.model("books", bookSchema);
export default book;

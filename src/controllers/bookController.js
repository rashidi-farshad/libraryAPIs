import bookModel from "../models/bookModel.js";
import {
  bookSchemaValidation,
  bookEditSchemaValidation,
} from "../validators/validator.js";

export const getBooks = async (req, res) => {
  const books = await bookModel.find();
  res.json(books);
};

export const addBook = async (req, res) => {
  const result = bookSchemaValidation.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json(result.error.issues);
  }
  const newBook = result.data;
  await bookModel.create(newBook);
  res.json({ message: "new book added", newBook });
};

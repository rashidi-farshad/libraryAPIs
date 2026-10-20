import bookModel from "../models/bookModel.js";
import {
  bookSchemaValidation,
  bookEditSchemaValidation,
} from "../validators/validator.js";

export const getBooks = async (req, res) => {
  const books = await bookModel.find();
  res.json(books);
};

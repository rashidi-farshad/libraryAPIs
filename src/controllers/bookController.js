import mongoose from "mongoose";
import bookModel from "../models/bookModel.js";
import {
  bookSchemaValidation,
  bookEditSchemaValidation,
} from "../validators/validator.js";

export const getBooks = async (req, res) => {
  const books = await bookModel.find();
  res.json(books);
};

export const getOneBook = async (req, res) => {
  let { id } = req.params;
  const isValid = mongoose.isValidObjectId(id);
  if (!isValid) {
    return res.status(400).json({ message: "book not found" });
  }
  const book = await bookModel.findById({ _id: id }); //.select("title author");
  res.send(book);
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

export const deleteBook = async (req, res) => {
  let { id } = req.params;

  const isValid = mongoose.isValidObjectId(id);
  if (!isValid) {
    return res.status(400).json({ messgae: "book not found" });
  }
  await bookModel.findByIdAndDelete({ _id: id });
  res.send({ message: "book removed successfully.." });
};

export const editBook = async (req, res) => {
  let { id } = req.params;

  const isValid = mongoose.isValidObjectId(id);
  if (!isValid) {
    return res.status(400).json({ messgae: "book not found" });
  }

  const result = bookEditSchemaValidation.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({ message: "cannot edit book" });
  }
  const updateBook = result.data;
  await bookModel.findByIdAndUpdate({ _id: id }, { $set: updateBook });
  res.json({ message: "book info updated", updateBook });
};

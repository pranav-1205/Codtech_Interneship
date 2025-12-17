const Book = require("../models/Book");

/* CREATE */
exports.addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* READ ALL */
exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

/* READ ONE */
exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
};

/* UPDATE */
exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(book);
};

/* DELETE */
exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted successfully" });
};

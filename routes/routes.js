const express = require('express');
const router = express.Router();
const path = require("path")
const controller = require("../controller")

// BASIC NAVIGATION
router.get("/", controller.landing);

//GET ALL
router.get("/book-list", controller.bookList)

//GET ONE
router.get("/search-book", controller.searchBook)
router.post("/search-book", controller.bookInfo)

//CREATE ONE
router.get("/new-book", controller.getFormNewBook)
router.post("/new-book", controller.createNewBook)
//UPDATE ONE
router.get("/edit-book", controller.getFormEditBook);
router.post("/edit-book/", controller.getEditInfo);
router.post("/edit-book/:title", controller.editBook)


//DELETE ONE
router.get("/delete-book", controller.deleteBookFind)
router.post("/delete-book", controller.deleteBook)

module.exports = router
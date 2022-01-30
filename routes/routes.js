const express = require('express');
const router = express.Router();
const path = require("path")
const controller = require("../controller")

//LANDING
router.get("/", controller.landing);

//BUSCAR TODOS
router.get("/book-list", controller.bookList)

//BUSCAR UNO
router.get("/search-book", controller.searchBook);
router.post("/search-book", controller.bookInfo);

//CREAR
router.get("/new-book", controller.getFormNewBook);
router.post("/new-book", controller.createNewBook);

//EDITAR
router.get("/edit-book", controller.getFormEditBook);
router.post("/edit-book/", controller.getEditInfo);
router.put("/edit-book/:title", controller.editBook)


//BORRAR
router.get("/delete-book", controller.deleteBookFind);
router.delete("/delete-book", controller.deleteBook)

module.exports = router;
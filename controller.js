const path = require("path");
const Books = require("./model/Books");


//TODO -> Hacer algo (por ejemplo middleware) para no repetir el código tanto.

exports.landing = (req, res)=>{
    res.sendFile(path.join(__dirname, "public","index.html"));
}

exports.bookList = async (req, res) =>{
    let bookList = await Books.find({}).lean();
    res.render("bookList.handlebars", {data: bookList}) ;  
}

exports.searchBook = (req, res) =>{
    res.sendFile(path.join(__dirname,"public", "searchBook.html"));
}

exports.bookInfo = async (req,res) =>{
    const searchBook = await Books.find({title: req.body.title}).lean()

    if(searchBook == ""){
        const msg = {};
        msg.content = "El libro no ha sido encontrado!";
        res.render("message.handlebars", {data:{msg:msg}});
    }
    if (searchBook != ""){
        res.render("bookInfo.handlebars", {data: searchBook});
    }
}

exports.getFormNewBook = (req,res) =>{
    res.sendFile(path.join(__dirname, "public", "bookForm.html"));
}
exports.createNewBook = async (req, res)=>{
    const book = Books(req.body);
    await book.save();
    const msg = {};
    msg.content = "Libro introducido con éxito!";
    res.render("message.handlebars", {data:{msg:msg}});
};

exports.getFormEditBook = (req,res)=>{
    res.sendFile(path.join(__dirname, "public", "editBook.html"));
}

exports.getEditInfo = async(req,res)=>{
    const searchBook = await Books.find({title: req.body.title}).lean();
    if(searchBook == ""){
        const msg = {};
        msg.content = "El libro no ha sido encontrado!";
        res.render("message.handlebars", {data:{msg:msg}});
    }
    if (searchBook != ""){
        res.render("editBook.handlebars", {data: searchBook});
    }
}

exports.editBook = async(req,res) =>{
    const titulo = req.params.title;
    await Books.updateOne({title: titulo}, req.body);
    res.redirect("/book-list");
}

exports.deleteBookFind = (req,res)=>{
    res.sendFile(path.join(__dirname, "public", "deleteBook.html"));
}

exports.deleteBook = async(req,res)=>{
    const searchBook = await Books.find({title: req.body.title});
    if(searchBook == ""){
        const msg = {};
        msg.content = "El libro no ha sido encontrado!";
        res.render("message.handlebars", {data:{msg:msg}});
    }
    if (searchBook != ""){
        await Books.deleteOne({title: req.body.title});
        const msg = {};
        msg.content = "Libro eliminado con éxito!";
        res.render("message.handlebars", {data:{msg:msg}});
    }
    
}
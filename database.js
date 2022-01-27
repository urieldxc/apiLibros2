import {connect} from 'mongoose';


//Esta gramática es para que se ejecute automáticamente la conexión!
exports(async ()=>{
    const db = connect("mongodb+srv://urieldxc:mongo1234@cluster0.lglc8.mongodb.net/crud-mongo")
    console.log("DB conectada a ", db.connection.name)
})


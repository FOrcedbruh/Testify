const { Schema, model, moongose } = require("mongoose")




const UserChema = new Schema({
    login: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    result: {
        type: Number,
        required: false
    }
})


module.exports = model("User", UserChema);
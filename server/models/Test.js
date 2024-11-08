const { mongoose, Schema, model } = require("mongoose")




const TestSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answers: [
        {
            type: String,
            required: true
        }
    ],
    correctAnswer: {
        type: Number,
        required: true
    }
})

module.exports = model("Test", TestSchema);
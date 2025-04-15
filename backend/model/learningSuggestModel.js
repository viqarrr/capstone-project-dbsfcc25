import mongoose from "mongoose";

const learningSuggestSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const LearningSuggest = mongoose.model("LearningSuggest", learningSuggestSchema);
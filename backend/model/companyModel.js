import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    logo: {
        type: String
    },
    jobCount: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

export const Company = mongoose.model("Company", companySchema);
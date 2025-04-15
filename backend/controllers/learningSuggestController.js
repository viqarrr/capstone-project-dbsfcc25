import { LearningSuggest } from "../model/learningSuggestModel.js";

export const createLearningSuggest = async (req, res) => {
    try {
        const { title, description, price, link, imageUrl } = req.body;

        if (!title || !description || !price || !link || !imageUrl) {
            return res.status(400).json({
                message: "All fields are required.",
                success: false
            });
        }

        const learningSuggest = await LearningSuggest.create({
            title,
            description,
            price,
            link,
            imageUrl
        });

        return res.status(201).json({
            message: "Learning suggestion created successfully.",
            learningSuggest,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred while creating the learning suggestion.",
            success: false
        });
    }
};

export const getLearningSuggests = async (req, res) => {
    try {
        const learningSuggests = await LearningSuggest.find();
        return res.status(200).json({
            learningSuggests,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred while fetching learning suggestions.",
            success: false
        });
    }
};

export const getLearningSuggestById = async (req, res) => {
    try {
        const suggestId = req.params.id;

        const learningSuggest = await LearningSuggest.findById(suggestId);
        if (!learningSuggest) {
            return res.status(404).json({
                message: "Learning suggestion not found.",
                success: false
            });
        }

        return res.status(200).json({
            learningSuggest,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred while fetching the learning suggestion.",
            success: false
        });
    }
};

export const updateLearningSuggest = async (req, res) => {
    try {
        const suggestId = req.params.id;
        const { title, description, price, link, imageUrl } = req.body;

        const learningSuggest = await LearningSuggest.findByIdAndUpdate(suggestId, {
            title,
            description,
            price,
            link,
            imageUrl
        }, { new: true });

        if (!learningSuggest) {
            return res.status(404).json({
                message: "Learning suggestion not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Learning suggestion updated successfully.",
            learningSuggest,
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred while updating the learning suggestion.",
            success: false
        });
    }
};

export const deleteLearningSuggest = async (req, res) => {
    try {
        const suggestId = req.params.id;

        const learningSuggest = await LearningSuggest.findByIdAndDelete(suggestId);
        if (!learningSuggest) {
            return res.status(404).json({
                message: "Learning suggestion not found.",
                success: false
            });
        }

        return res.status(200).json({
            message: "Learning suggestion deleted successfully.",
            success: true
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "An error occurred while deleting the learning suggestion.",
            success: false
        });
    }
};
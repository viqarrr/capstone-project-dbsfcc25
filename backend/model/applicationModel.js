import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User ',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }
}, { timestamps: true });

applicationSchema.post('save', async function (doc) {
    const job = await Job.findById(doc.job).populate('company');
    if (job && job.company) {
        await Company.findByIdAndUpdate(job.company, { $inc: { jobCount: 1 } });
    }
});

applicationSchema.post('remove', async function (doc) {
    const job = await Job.findById(doc.job).populate('company');
    if (job && job.company) {
        await Company.findByIdAndUpdate(job.company, { $inc: { jobCount: -1 } });
    }
});

export const Application = mongoose.model("Application", applicationSchema);
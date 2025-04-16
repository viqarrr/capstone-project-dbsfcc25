import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["jobseeker", "recruiter"],
      required: true,
    },
    profile: {
      skills: [{ type: String }],
      hobbies: [{ type: String }],
      experienceLevel: {
        type: String,
        enum: [
          "Entry-level",
          "Junior-level",
          "Mid-level",
          "Senior-level",
          "Lead-level",
        ],
      },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
      profilePhoto: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);
export const User = mongoose.model("User", userSchema);

import { model, Schema } from "mongoose";

const commentSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Your name is required"],
      trim: true,
      minLength: 2,
      maxLength: 50,
    },

    email: {
      type: String,
      required: [true, "Your email is required"],
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Please fill a valid email address"],
    },

    subject: {
      type: String,
      required: [true, "Subject field is required"],
    },

    message: {
      type: String,
      required: [true, "Message field is required"],
    },
  },
  { timestamps: true }
);

const Comment = model("Comment", commentSchema);
export default Comment;

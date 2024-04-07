import mongoose from "mongoose";

const subTodoSchema = new mongoose.Schema(
  {
    constent: {
      type: String,
      required: true,
    },
    isCompleated: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      Type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const SubTodo = mongoose.model("SubTodo", subTodoSchema);

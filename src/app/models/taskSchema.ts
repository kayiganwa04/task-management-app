import mongoose, { Schema, models } from "mongoose";

const taskSchema = new Schema(
{
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
},
{ timestamps: true }
);

const Task = models.tasks || mongoose.model("tasks", taskSchema);
export default Task;

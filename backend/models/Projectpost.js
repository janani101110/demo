const mongoose = require("mongoose");

const projectpostSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    project_name: {
      type: String,
      required: true,
    },
    components: {
      type: String,
      required: true,
    },
    objectives: {
      type: String,
      required: true,
    },
    intro: {
      type: String,
      required: true,
    },
    project_photo: {
      type: String,
      required: true,
    },
    explanation: {
      type: String,
      required: true,
    },
    circuit_diagram: {
      type: String,
      required: true,
    },
    pcb_design: {
      type: String,
      required: true,
    },
    git_link: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Projectpost", projectpostSchema);

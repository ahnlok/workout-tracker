const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please Enter Your Exercise Type!"
      },
      name: {
        type: String,
        trim: true,
        required: "Please Enter the Name of Your Exercise."
      },
      
      duration: Number,
      weight: {
        type: Number,
        default: 0,
      },
      reps: {
        type: Number,
        default: 0,
      },
      sets: {
        type: Number,
        default: 0,
      },
      distance: {
        type: Number,
        default: 0,
      },
    },
  ],
  },
  {
    toJSON: {
      // Include any virtual properties when data is requested
      virtuals: true
    }
  }
);

// Add a dynamically-created property to schema
FitnessSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Fitness = mongoose.model("Fitness", FitnessSchema);

module.exports = Fitness;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: Date.now,
        },
        excercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Please enter type"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Please enter exercise name"
                },
                weight: {
                    type: Number,
                },
                duration: {
                    type: Number,
                },
                reps: {
                    type: Number,
                },
                sets: {
                    type: Number,
                },
                distance: {
                    type: Number,
                },
            },
        ],
    },
    opts
);

//totalDuration calculation
workoutSchema.virtual("totalDuration").get(function () {
    return this.exercises.reduce(reducer, 0);
});

const reducer = (accumulator, exercise) => accumulator + excercise.duration;

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
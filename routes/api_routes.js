const router = require('express').Router();
const db = require('../models');
const ObjectId = require('mongojs').ObjectId;
const Workout = require('../models/workout');

router.post('/workouts', (_req, res) => {
    //create new workout
    db.Workout.create({}).then((data) => {
        res.json(data);
    })
        .catch((err) => {
            console.error(err);
        });
});

router.get("/workouts", (_req, res) => {
    //get all workouts
    db.Workout.find({}).then((data) => {
        res.json(data);
    });
});

router.put('/workouts/:id', (_req, res) => {
    //update workout
    const id = _req.params.id;
    const data = _req.body;
    db.Workout.findOneAndUpdate(
        { _id: ObjectId(id) },
        {
            $push: {
                exercises: data,
            },
        },
        { new: true }
    ).then((workout) => {
        console.log(workout)
        res.json(workout);

    });
});

router.get('/workouts/range', (_req, res) => {
    //get all workouts
    db.Workout.find({}).then((data) => {
        res.json(data);
    });
});

module.exports = router;
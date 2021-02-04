const router = require('express').Router();
const db = require('../models');
const ObjectId = require('mongojs').ObjectId;

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


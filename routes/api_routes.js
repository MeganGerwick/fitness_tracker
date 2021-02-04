const router = require('express').Router();
const db = require('../models');
const ObjectId = require('mongojs').ObjectId;

router.get("/workouts", (_req, res) => {
    //get all workouts
    db.Workout.find({}).then((data) => {
        res.json(data);
    });
});
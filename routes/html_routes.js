const path = require("path");
const router = require("express").Router();


// Routing
router.get("/stats", (_req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/stats.html"));
});

router.get("/exercise", (_req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/exercise.html"));
});

router.get("/", (_req, res) => {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
});

module.exports = router;

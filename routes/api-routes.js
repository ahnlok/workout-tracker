const Fitness = require("../models/fitness.js")

module.exports = function (app) {
  // get workout information
  app.get("/api/workouts", (req, res) => {
    Fitness.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      })
  });
  // Create new workout
  app.post("/api/workouts", function (req, res) {
    Fitness.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      })
  });
  // Get workout information in range
  app.get("/api/workouts/range", function (req, res) {
    Fitness.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      })
  });
  // Create new workout information in range
  app.post("/api/workouts/range", function (req, res) {
    Fitness.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      })
  });

  // Add Exercise
  app.put("/api/workouts/:id", function ({body, params}, res) {
    Fitness.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      })
    });
};

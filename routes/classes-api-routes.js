// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  // Route for adding new gym classes
  app.post("/api/booking", (req, res) => {
    db.classes
      .create({
        userId: req.user.id,
        classId: req.body.classId,
        startTime: req.body.startTime,
        endTime: req.body.endTime
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });
};

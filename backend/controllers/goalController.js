//@desc     Get goals
//@route    GET /api/goals
//@access   Private
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

//@desc     Set goals
//@route    POST /api/goals
//@access   Private
const setGoals = (req, res) => {
  res.status(200).json({ message: "Create goal" });
};

//@desc     Update goal
//@route    PUT /api/goals
//@access   Private
const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

//@desc     Delete goal
//@route    DELETE /api/goals
//@access   Private
const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};

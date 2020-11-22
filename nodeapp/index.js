const express = require("express");
const app = express();
const { User } = require("./models");
app.use(express.json());

app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

app.post("/users", async (req, res) => {
  const { body } = req;
  const newUser = await User.create(body);
  res.json(newUser);
});

app.get("/users/:id", async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

app.put("/users/:user_id", async (req, res) => {
  const { user_id } = req.params;
  const updated = await User.update(req.body, {
    where: { id: user_id },
  });
  res.json(updated);
});

app.get("/users/:id", async (req, res) => {
  const user = await User.destroy({ where: { id: req.params.id } });
  res.json(user);
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

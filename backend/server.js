const express = require("express");
const cors = require("cors");
const connectDB = require("./src/db");
const taskRoutes = require("./src/routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();
app.use("/api/tasks", taskRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Backend running on port ${port}`));

module.exports = app;  // for Jest tests

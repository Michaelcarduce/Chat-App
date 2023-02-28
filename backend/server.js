const express = require("express");
const { chats } = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();

connectDB();

//this code telling the server to accept the json data, file from frontend
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running succesfully");
});
app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

const PORT = process.env.PORT || 5000;
app.listen(
  `${PORT}`,
  console.log(`Server Started on Port ${PORT}`.yellow.bold)
);

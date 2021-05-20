const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/posts");

const env = require("dotenv");
env.config();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb", extended: true }));

app.use(cors());
app.use("/posts", router);

mongoose
  .connect(process.env.URL, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
  .catch((error) => console.log(error.message));

const express = require("express");
const { sequelize } = require("./models");
const { rootRouter } = require("./routes");
const dotenv = require("dotenv");
const path = require("path");
const cors = require('cors');
const app = express();
dotenv.config({ path: "./config.env" });
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())
const publicDir = path.join(__dirname, "./public");
app.use("/public", express.static(publicDir));
app.use("/api/v1/", rootRouter);

const port = process.env.PORT;

app.listen(port, async () => {
  console.log(`Server is running on port http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

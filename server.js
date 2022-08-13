const express = require("express");
const { sequelize } = require("./models");
const { rootRouter } = require("./routes");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const compression = require("compression");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const app = express();
dotenv.config({ path: "./config.env" });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials :true , origin : 'http://localhost:3000'}));
app.use(cookieParser());

app.use(compression({
  level : 6,
  // threshold : 10 * 1000
}));

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

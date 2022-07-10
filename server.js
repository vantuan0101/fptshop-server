const express = require("express");
const { sequelize } = require("./models");
const { rootRouter } = require("./routes");
const app = express();

app.use(express.json());

app.use("/api/v1/", rootRouter);

const port = 3001;
app.listen(port, async () => {
  console.log(`Server is running on port http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

const express = require("express");
const { sequelize } = require("./models");
const { rootRouter } = require("./routes");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const compression = require("compression");
const helmet = require("helmet");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
const app = express();
app.enable("trust proxy"); // trust first proxy
dotenv.config({ path: "./config.env" });

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
// app.use(bodyParser.json());
// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));


// app.use(cors({credentials :true , origin : 'http://localhost:3000'}));
// Implement CORS
app.use(cors());
// app.options('*', cors());
app.use(cookieParser());

app.use(compression({
  level : 6,
  // threshold : 10 * 1000
}));
// Set security HTTP headers
app.use(helmet());

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use('/api', limiter);
// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price'
    ]
  })
);
// Serving static files
const publicDir = path.join(__dirname, "./public");
app.use("/public", express.static(publicDir));
app.use("/api/v1/", rootRouter);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`Server is running on port http://localhost:${port}`);
  // console.log(`Server is running on port http://localhost:${port}`);
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

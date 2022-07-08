const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//*router
app.use("/api/user", userRoutes);

//*server
app.listen(process.env.PORT, () => {
  console.log(`listen on port ${process.env.PORT}`);
});

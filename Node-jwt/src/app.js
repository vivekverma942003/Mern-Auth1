const express = require("express");
const signupRoute = require("./routes/signup");
const bodyParser = require("body-parser");
const cors = require("cors");
const loginRoute=require("./routes/login")
const app= express();
const userRoute = require("./routes/user");
app.use(bodyParser.json());
app.use(cors());
app.use("/user",signupRoute);
app.use("/auth", loginRoute);
app.use("/api",userRoute);
const port = process.env.PORT || 5000;
const createAdminAccount = require("./scripts/admin");
createAdminAccount();
app.listen(port,()=>{
    console.log(`Our server is running on the :http://localhost:${port}`);
    
})


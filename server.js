const express = require("express");
const errorHandler = require("./controllers/middleware/errorHandler.js");
const dotenv = require("dotenv").config();
const app = express();
const port = process.env.PORT || 5005;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes.js"))
app.use(errorHandler)

app.listen(port,() =>{
console.log(`server is up and in port ${port}`)
});
const express = require("express");
const cors = require("./libraries/cors");
require("dotenv").config();
let dbConnect = require("./dbConnect");

const app = express();


app.use(cors);

// parse requests of content-type - application/json
app.use(express.json());

let userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
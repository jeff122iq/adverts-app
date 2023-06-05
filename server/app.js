require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const HOST = process.env.HOST;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);
mongoose.connect(
        process.env.MONGODB_URL,
        {useNewUrlParser: true, useUnifiedTopology: true}
    )
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const startServer = () => console.log(`Server has been starts on ${HOST}:${PORT}/api/`);

app.listen(PORT, () => startServer());



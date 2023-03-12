import { log } from "console";
import express from "express";
const app = express();

import path from "path"; 

app.use(express.static("public"));

import jokes from "./util/jokes.js";
//console.log(await jokes.getJoke());

app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/pages/frontpage/frontpage.html"));
});

app.get("/IRLQuests", (req, res) => {
    res.sendFile(path.resolve("public/pages/IRLQuests/IRLQuests.html"));
});

/* assingment create a joke page and serve it */
app.get("/jokes", (req, res) => {
    res.sendFile(path.resolve("public/pages/jokes/jokes.html"));
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port " + PORT);
});


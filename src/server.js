
const express = require("express");
const {getUser,setUser} = require('./controller/userController.js');

const app = express();
app.use(express.json());
app.post("/user", setUser);
app.get("/user/:id", getUser);

const PORT =5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

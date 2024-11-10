import express from "express";
import superheroes from "superheroes";


const app = express();
const port = 3000;

// app.use("view engine","ejs")
// app.use(express.static("public"))

app.get("/", (req, res) => {
  let name = superheroes.random();
  res.send(`<h1>Behold, I am ${name}!</h1> <hr> <p> 💚This is my first paragraph to the project✋ </p>`);
  
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

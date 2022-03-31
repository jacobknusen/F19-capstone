const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/goals", (req, res) => {
    const goal = ["read one chapter a day in a book(knowledge is power)!!",
         "go to the gym for a hour a day! (stay hard)",
        "healthy diet, no sugar, no soda, no bs!! (health is wealth)",
     "make your bed every morning! (atomic habits)",];
  
    // choose random compliment
    let randomIndex = Math.floor(Math.random() * goal.length);
    let randomGoals = goal[randomIndex];
  
    res.status(200).send(random);
    
  });
  app.listen(4040, () => console.log("Server running on 4040"));
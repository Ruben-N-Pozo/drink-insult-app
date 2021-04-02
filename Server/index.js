const express = require("express");
const axios = require("axios");
const app = express();
const port = 8080;

app.use(express.json());

app.get("/insult", (req, response) => {
  axios
    .get("https://evilinsult.com/generate_insult.php?lang=en&type=json")
    .then((res) => {
      response.status(200).json(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port, () => {
  console.log("listening on " + port);
});

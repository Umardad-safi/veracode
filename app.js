const express = require("express");
const app = express();

// ❌ vulnerable SQL-like pattern (for learning)
app.get("/user", (req, res) => {
  const id = req.query.id;

  const query = "SELECT * FROM users WHERE id = " + id;

  res.send("Query executed: " + query);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

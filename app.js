const express = require("express");
const app = express();

// ❌ vulnerable SQL-like pattern (for learning)
app.get("/user", (req, res) => {
  const id = req.query.id;

  const query = "SELECT * FROM users WHERE id = " + id;

  //   res.send("Query executed: " + query);
  //   instead of this we use the below response to remove the vulnerabilities and to make it more secure

  if (isNaN(id)) {
    return res.status(400).json({
      error: "Invalid user ID",
    });
  }

  res.json({
    message: "Request received successfully",
    userId: id,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

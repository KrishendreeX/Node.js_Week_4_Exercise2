import express from "express";

const app = express();
app.use(express.json());

// EMPLOYEES ROUTES     

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the PICK 'n STEAL API" });
});

app.get("/employees", (req, res) => {
  res.json({ message: "This is the GET employees path" });
});

app.post("/employees", (req, res) => {
  res.json({ message: "This is the POST employees path — a new employee was added" });
});
app.patch("/employees", (req, res) => {
  res.json({ message: "This is the PATCH employees path — an employee's info was partially updated" });
});

app.delete("/employees", (req, res) => {
  res.json({ message: "This is the DELETE employees path — an employee was removed" });
});

// MANAGERS ROUTES 

app.get("/managers", (req, res) => {
  res.json({ message: "This is the GET managers path" });
});

app.post("/managers", (req, res) => {
  res.json({ message: "This is the POST managers path — a new manager was added" });
});

app.patch("/managers", (req, res) => {
  res.json({ message: "This is the PATCH managers path — a manager's info was partially updated" });
});

app.delete("/managers", (req, res) => {
  res.json({ message: "This is the DELETE managers path — a manager was removed" });
});

app.listen(5000, () => {
  console.log(`Server running on http://localhost:5000`);
});
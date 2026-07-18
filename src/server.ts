import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
========================================
🚀 Server Started Successfully
========================================
Environment : ${process.env.NODE_ENV || "development"}
Port        : ${PORT}
URL         : http://localhost:${PORT}
========================================
`);
});

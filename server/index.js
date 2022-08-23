const express = require("express");
const app = express();
const PORT = 5000;

const cors = require("cors");
app.use(cors());
const http = require("http").Server(app);

const socketIO = require("socket.io")(http, {
  cors: {
    origin:
      "https://3000-sammyjay-ideasapplatest-ua9wvdo4v0r.ws-eu62.gitpod.io/",
  },
});

socketIO.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on("message", (data) => {
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

app.get("/api", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

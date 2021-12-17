const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const http = require("http").createServer(app);
const CLIENT = "http://localhost:3000";
http,
  {
    cors: {
      origin: CLIENT,
      methods: ["GET", "POST"],
      allowedHeaders: ["Access-Control-Allow-Origin"],
      credentials: true,
    },
  };

const io = require("socket.io")(http, {
  cors: {
    origin: CLIENT,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Access-Control-Allow-Origin"],
    // credentials: true,
  },
});

io.on("connection", (socket) => {
  // console.log(socket.handshake);
  // console.log("User connected:", "type:", socket.handshake.query.type);

  socket.on("disconnect", () => {
    // console.log("Someone disconnected", socket.handshake.query.type);
    socket.removeAllListeners();
  });

  socket.on("comment", (data) => {
    // console.log("data @ socket server", data);
    io.emit("comment", data);
  });
});

const commentRouter = require("./routes/comment");
app.use("/", commentRouter);

http.listen(5000, () => {
  console.log("listening on *:5000");
});

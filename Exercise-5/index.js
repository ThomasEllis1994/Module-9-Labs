const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const users = {};

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    users[socket.id] = `Rando number ${socket.id}`;
    io.emit("user list", Object.values(users));
    console.log("a user connected");

    socket.on("disconnect", () => {
        console.log("user disconnected");
    });
});

server.listen(3000, () => {
    console.log("listening on *:3000");
});

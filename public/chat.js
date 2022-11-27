const socket = io();

const message = document.getElementById("message");
const handle = document.getElementById("handle");
const btn = document.getElementById("send");
const output = document.getElementById("output");
const feedback = document.getElementById("feedback");
const main = document.getElementById("main");

// emit event
btn.onclick = () => {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
};
message.addEventListener("keypress", () => {
   socket.emit("typing", handle.value);
});

//Listen for events

socket.on("chat", (data) => {
  feedback.innerHTML=''  
  output.innerHTML +=
    "<p><strong>" + data.handle + ":</strong>" + data.message + "</p>";
});

socket.on("typing", (data) => {
  feedback.innerHTML = "<p><em>" + data + "is typing </em></p>";
});

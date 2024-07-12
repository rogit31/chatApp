var conn = new WebSocket('ws://localhost:8080');
conn.onopen = function(e) {
    console.log("Connection established!");
};

conn.onmessage = function(e) {
    var messagesDiv = document.getElementById('messages');
    var newMessage = document.createElement('div');
    newMessage.textContent = e.data;
    messagesDiv.appendChild(newMessage);
};

function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;
    conn.send(message);
    messageInput.value = '';
}

//TODO: Make it so that the user sees their own message as well
//TODO: Make it so that users can connect or disconnect to chatrooms

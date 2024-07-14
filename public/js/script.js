const conButton = document.getElementById("connectButton");
let conn;
let isConnected = false;


conButton.onclick = function connect(){
    if(isConnected){
        conn.close();
        document.getElementById('connectStatus').textContent = 'Disconnected';
        conButton.innerText = 'Connect';
        isConnected = false;
    }
    else{
        conn = new WebSocket('ws://localhost:8080');
        document.getElementById('connectStatus').textContent='Connected!'
        conn.onopen = function(e) {
            isConnected = true;
            console.log(isConnected);
            console.log("Connection established!");
            document.getElementById('connectStatus').innerHTML = 'Connected!'
            conButton.innerText = 'Disconnect'
        };

        conn.onmessage = function(e) {
            var messagesDiv = document.getElementById('messages');
            var newMessage = document.createElement('div');
            newMessage.textContent = e.data;
            newMessage.classList.add('message', 'received');
            messagesDiv.appendChild(newMessage);
        };
    }

};
function sendMessage() {
    var messageInput = document.getElementById('messageInput');
    var message = messageInput.value;

    // Send to yourself.
    var messagesDiv = document.getElementById('messages');
    var newMessage = document.createElement('div');
    newMessage.textContent = message;
    newMessage.classList.add('message','self');
    messagesDiv.appendChild(newMessage);

    conn.send(message);
    messageInput.value = '';
}
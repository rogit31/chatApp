<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Chat App</title>
    <link href="scss/styles.css" rel="stylesheet">
    <script defer src="js/script.js"></script>
</head>
<body>
<div class="wrapper">
    <header>
        <?php include_once __DIR__ . '/../src/views/components/header.php' ?>
    </header>
    <div class="chat-container">
        <div class="chat-header">
            <h1>Welcome to this chat app!</h1>
        </div>
        <div class="chat-box" id="messages"></div>
        <div id="connectStatus"></div>
        <div class="chat-input">
            <button id="connectButton">Connect</button>
            <input type="text" id="messageInput" placeholder="Type a message...">
            <button onclick="sendMessage()">Send</button>
        </div>
    </div>
    <footer></footer>
</div>
</body>
</html>

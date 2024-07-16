This project is a simple implementation of a web-socket based chat app based on PHP and the Ratchet library. 
Made for BCIT's COMP-3015


***How to install the Ratchet PHP Library***

You must have Composer first installed. Once you do, install the Ratchet PHP Library with the following command:

php ~/composer.phar require cboden/ratchet


***Running the Application***

From root directory, run the following terminal commands on separate Terminal windows (you can use whatever port you 
would like for the second terminal)

1) php bin/chat-server.php
2) php -S localhost:3004 -t public

This will open up the webpage.

Duplicate the window so there are two windows in order to simulate multi-user chat functionality. You can test by posting back and forth.


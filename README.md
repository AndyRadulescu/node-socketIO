# node-socketIO

This is a chat application written in Node.js using SocketIO. 

To run the application, go to the server.js in the server package and run on the terminal "node server.js". This will start the server
on port 3000. In browser, go to localhost:3000. Write your name and the room you want to enter (ex: "Andy", "room1"). You can send 
messages or your location in this room. Just the people who already joined the room can see your messages or location. In the left hand-side
is a people's manager section. There could be seen all the people who currently joined the room. If somebody exits or enters the chat room, 
their name will be automatically displayed there.

The buttons, when a request in in progress, are inactive to prevent spamming. To avoid annoyance, an autoscroll feature has been implemented.
When there are more messages then the viewport can contain, the scroll automatically goes down.This is not happening if the person scrolled 
upwards to see older messages, thus in this situation, if am message comes, the scroll will not go down.

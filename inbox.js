var inbox = require("inbox");

var client = inbox.createConnection(false, "imap.domain.com", {
    secureConnection: true,
    auth:{
        user: "youremail@domain.com",
        pass: "yourpassword"
    }
});

client.connect();

client.on("connect", function(){
    console.log('Client connected to IMAP Server');
    client.openMailbox("INBOX", function(error, info){
        if(error) throw error;
        console.log('Opened INBOX');
    });
});

client.on("new", function(message){
    console.log("New incoming message " + message.title);
    console.log(message);
});
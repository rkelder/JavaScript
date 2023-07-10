const messages = {
    message_1: "Coding like poetry should be short and concise. ― Santosh Kalwar",
    message_2: "It’s not a bug; it’s an undocumented feature. ― Anonymous",
    message_3: "First, solve the problem. Then, write the code. – John Johnson",
    message_4: "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    message_5: "Make it work, make it right, make it fast. – Kent Beck"
}

const messageKeys = Object.keys(messages);

let usedMessages = [];
let used_keys = [];

function messageGenerator() {
    if (used_keys.length == messageKeys.length) {
        console.log("All messages have been shown. Resetting");
        alert("All messages have been shown. Resetting");
        usedMessages = [];
        used_keys = [];
        document.getElementById("msg").innerHTML = "Click on the button to change the message";
        document.getElementById("used_msgs").innerHTML = "Used messages: \n";
        return "reset";
    }

    let randomIndex = Math.floor(Math.random() * messageKeys.length);
    let key = messageKeys[randomIndex];
  
    while (used_keys.includes(key)) {
        randomIndex = Math.floor(Math.random() * messageKeys.length);
        key = messageKeys[randomIndex];
    }

    let new_msg = messages[key];
    usedMessages.push(new_msg);
    used_keys.push(key);
    return new_msg;
}

function display_new() {
    let new_msg = messageGenerator();
    if (new_msg == "reset") {
        return;
    }

    document.getElementById("used_msgs").innerHTML += new_msg + "\n";
}

messageGenerator();

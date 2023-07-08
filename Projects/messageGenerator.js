function messageGenerator() {
    const messages = {
        message_1: "Coding like poetry should be short and concise. ― Santosh Kalwar",
        message_2: "It’s not a bug; it’s an undocumented feature. ― Anonymous",
        message_3: "First, solve the problem. Then, write the code. – John Johnson",
        message_4: "Code is like humor. When you have to explain it, it’s bad. – Cory House",
        message_5: "Make it work, make it right, make it fast. – Kent Beck"
    }

    const randomNumber = Math.floor(Math.random() * 6);
    const messageKey = 'message_' + (randomNumber + 1);

    console.log(messages[messageKey]);
}

messageGenerator()

/* 

Pathname for node: "C:\Users\roder\OneDrive\Documents\Projects\JavaScript\Projects\messageGenerator.js"

 Message generator functions:

* Return a pre-defined message using console.log
* The pre-defined message is one out of five options
* The pre-defined messages are stored in one object
* The messages are chosen using math.random
* If the randomly selected message is the same as the one previously chosen, a different one will now be chosen.

*/
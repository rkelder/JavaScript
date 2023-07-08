/* 

 Message generator functions:

* [Completed] Return a pre-defined message using console.log
* [Comppleted] The pre-defined message is one out of five options
* [Completed] The pre-defined messages are stored in one object
* [Completed] The messages are chosen using math.random
* [Completed] If the randomly selected message is the same as the one previously chosen, a different one will now be chosen.

*/

const messages = {
    message_1: "Coding like poetry should be short and concise. ― Santosh Kalwar",
    message_2: "It’s not a bug; it’s an undocumented feature. ― Anonymous",
    message_3: "First, solve the problem. Then, write the code. – John Johnson",
    message_4: "Code is like humor. When you have to explain it, it’s bad. – Cory House",
    message_5: "Make it work, make it right, make it fast. – Kent Beck"
}

const messageKeys = Object.keys(messages);

let usedMessages = [];

function messageGenerator() {
    if (usedMessages.length === messageKeys.length) {
        console.log("All messages have been shown. Resetting");
        usedMessages = [];
    }
            /*
         I create a randomIndex number that will select a random message out of the shuffled messages. 
         If the random number is equal to the previously rolled random number, I generate a new number.
             */

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * messageKeys.length);
    } while (usedMessages.includes(randomIndex));

    usedMessages.push(randomIndex);

    console.log(messages[messageKeys[randomIndex]]);
}

messageGenerator();
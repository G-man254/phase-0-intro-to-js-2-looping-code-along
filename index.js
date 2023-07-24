// Code your solutions in this file
const guests = ["Janet", "Caleb", "Josh"];
const eventName = "birthday";
const requiredOutput = writeCards(guests, eventName);
function writeCards(guests, eventName){
    let data = [];
    for(let i=0; i<guests.length; i++){
        const message= `Thank you, ${guests[i]}, for the wonderful ${eventName} gift!`
         data.push(message); 
    }
    return data;
}
console.log(requiredOutput);

//writeCards("Josh");
// function writeCards(namesArray, eventName) {
//     // Create a new empty array to hold the messages
//     let messagesArray = [];
  
//     // Iterate through the input array and build the 'thank you' message for each name
//     for (let i = 0; i < namesArray.length; i++) {
//       let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
//       messagesArray.push(message);
//     }
  
//     // Return the new array with all the messages
//     return messagesArray;
//   }
  
//   // Example usage:
//   const names = ["Alice", "Bob", "Carol"];
//   const event = "birthday";
//   const messages = writeCards(names, event);
//   console.log(messages);
function countDown(integer){
    while (integer >= 0){
    console.log(integer--);
    //integer--;
    }
    //return integer;
}
countDown(10)
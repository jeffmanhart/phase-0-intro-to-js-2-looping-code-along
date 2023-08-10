function writeCards(names, event){
    const messages = [];
    for (let i = 0; i< names.length; i++){
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        
    }
    return messages;
}
function countDown(num){
    let i = 0;
    while (i <= num) {
        console.log(num--);
    }
}
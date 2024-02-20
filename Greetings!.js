// https://open.kattis.com/problems/greetings2

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const n = readline.createInterface({ input, output });

n.question('', (t) => {
  
    let array = t.split(''); //this creates an array and splits a string into letters in the array


    for (const element of array) {
        if(element == "e"){
            eNumber = eNumber + 1
        }}
    
    
    
    var answer = "h"
    
    eNumber = Number(eNumber)
    
    for(var j = 0; j < eNumber*2; j++){
        answer = answer + "e";
    }
    
    answer += "y"
    console.log(answer)
    n.close();
});
var eNumber = 0




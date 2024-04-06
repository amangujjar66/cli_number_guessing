#! /usr/bin/env/ node

import inquirer from "inquirer";

//1) computer will generate a randam number

//2) user input for guessing number 

//3) campear user input with computer generated number and show result 

const randamNumber = Math.floor(Math.random() *6+1);

const answer = await inquirer.prompt([
    {
        name: "userGuessingNumber",
        type: "number",
        message: "please guess a number between 1-6: ",
        
    },
]);

if(answer.userGuessingNumber === randamNumber){
    console.log("congtratulations you guessed right number.")
}else{
    console.log("you guessed wrong number");
}
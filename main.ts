#! /usr/bin/env node

import inquirer from "inquirer";
import clear from "clear";

let userBalance = 1000;
let askAgain = "Yes";

clear();
const verification = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "\nPlease enter your Name: "
    },
    {
        type: "number",
        name: "pin",
        message: "Enter your pin: "
    }
])

if (verification.pin == 1234) {
    do {
        clear();
        console.log(`\n...WELCOME ${verification.name}, You can use ATM... `);

        const userChoice = await inquirer.prompt([
            {
                type: "list",
                name: "options",
                message: "\nWhat do you want? ",
                choices: ["Withdraw", "Deposit", "Check balance"]
            }
        ])

        if (userChoice.options == "Withdraw") {
            clear();
            console.log("\nWithdraw...");
            const withdrawChoice = await inquirer.prompt([
                {
                    type: "list",
                    name: "withdraw",
                    message: "Choose amount to withdraw? ",
                    choices: ["1000", "5000", "10,000", "20,000", "Other amount"]
                }
            ])
            if (withdrawChoice.withdraw == "1000") {
                if (userBalance >= 1000) {
                    console.log("\nSuccessfully withdraw 1000 rupees...");
                    userBalance = userBalance - 1000;
                }
                else {
                    clear();
                    console.log(`\nSORRY ${verification.name}, there are insufficient balance in your account to complete this withdraw.`);
                    console.log("Your current balance: ", userBalance);
                }
            }
            else if (withdrawChoice.withdraw == "5000") {
                if (userBalance >= 5000) {
                    console.log("\nSuccessfully withdraw 5000 rupees...");
                    userBalance = userBalance - 5000;
                }
                else {
                    clear();
                    console.log(`\nSORRY ${verification.name}, there are insufficient balance in your account to complete this withdraw.`);
                    console.log("Your current balance: ", userBalance);
                }
            }
            else if (withdrawChoice.withdraw == "10,000") {
                if (userBalance >= 10000) {
                    console.log("\nSuccessfully withdraw 10,000 rupees...");
                    userBalance = userBalance - 10000;
                }
                else {
                    clear();
                    console.log(`\nSORRY ${verification.name}, there are insufficient balance in your account to complete this withdraw.`);
                    console.log("Your current balance: ", userBalance);
                }
            }
            else if (withdrawChoice.withdraw == "20,000") {
                if (userBalance >= 20000) {
                    console.log("\nSuccessfully withdraw 20,000 rupees...");
                    userBalance = userBalance - 20000;
                }
                else {
                    clear();
                    console.log(`\nSORRY ${verification.name}, there are insufficient balance in your account to complete this withdraw.`);
                    console.log("Your current balance: ", userBalance);
                }
            }
            else if (withdrawChoice.withdraw == "Other amount") {
                clear();
                const withdrawAmount = await inquirer.prompt([
                    {
                        type: "number",
                        name: "amount",
                        message: "\nEnter amount you want to withdraw: "
                    }
                ])
                if (withdrawAmount.amount < 0){
                    console.log("\nPlease enter a valid positive value...");
                }
                else if (userBalance >= withdrawAmount.amount) {
                    console.log(`\nSuccessfully withdraw ${withdrawAmount.amount} rupees...`);
                    userBalance = userBalance - withdrawAmount.amount;
                }
                else if (userBalance <= withdrawAmount.amount){
                    console.log(`\nSORRY ${verification.name}, there are insufficient balance in your account to complete this withdraw.`);
                    console.log("Your current balance: ", userBalance);
                }
                else {
                    console.log("\nPlease enter a valid value...");
                }
            }
        }
        else if (userChoice.options == "Deposit") {
            clear();
            console.log("\nDeposit...");
            const depositChoice = await inquirer.prompt([
                {
                    type: "list",
                    name: "deposit",
                    message: "Choose amount to deposit? ",
                    choices: ["1000", "5000", "10,000", "20,000", "Other amount"]
                }
            ])
            if (depositChoice.deposit == "1000") {
                console.log("\nSuccessfully deposit 1000 rupees in your account...");
                userBalance = userBalance + 1000;
                console.log("Now your current balance is", userBalance);
            }
            else if (depositChoice.deposit == "5000") {
                console.log("\nSuccessfully deposit 5000 rupees in your account...");
                userBalance = userBalance + 5000;
                console.log("Now your current balance is", userBalance);
            }
            else if (depositChoice.deposit == "10,000") {
                console.log("\nSuccessfully deposit 10,000 rupees in your account...");
                userBalance = userBalance + 10000;
                console.log("Now your current balance is", userBalance);
            }
            else if (depositChoice.deposit == "20,000") {
                console.log("\nSuccessfully deposit 20,000 rupees in your account...");
                userBalance = userBalance + 20000;
                console.log("Now your current balance is", userBalance);
            }
            else if (depositChoice.deposit == "Other amount") {
                clear();
                const depositAmount = await inquirer.prompt([
                    {
                        type: "number",
                        name: "amount",
                        message: "\nEnter amount you want to deposit: "
                    }
                ])
                if (depositAmount.amount >= 0) {
                    console.log(`\nSuccessfully deposit ${depositAmount.amount} rupees in your account...`);
                    userBalance = userBalance + depositAmount.amount;
                    console.log("Now your current balance is", userBalance);
                }
                else {
                    console.log("Please enter a valid value...");
                }
            }
            
        }
        else if (userChoice.options == "Check balance") {
            clear();
            console.log("\nYour current balance: ", userBalance);
        }
        const userInputAskAgain = await inquirer.prompt([
            {
                type: "list",
                name: "yesOrNo",
                message: "\nDo you want to do other transaction? ",
                choices: ["Yes", "No"]
            }
        ])
        askAgain = userInputAskAgain.yesOrNo;
    } while (askAgain != "No");

clear();    
console.log(`\n--->> Thanks ${verification.name} for using our ATM :) <<--- `)

}
else {
    console.log("\nIncorrect PIN! Try again...");
}


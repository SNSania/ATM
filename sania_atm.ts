import inquirer from 'inquirer';
interface anyType {
    userId: string,
    userpin: number,
    accounttype: string,
    transactionType: string;
    amount: number;
}
const answer: anyType = await inquirer.prompt([
    {
        type: 'input',
        name: 'userId',
        message: 'Please Enter your ID:',
    },
    {
        type: 'number',
        name: 'userpin',
        message: 'Please Enter your Pin:',
    },
    {
        type: 'list',
        name: 'accounttype',
        choices: ["Current Account", "Saving Account", "Fixed Account",],
        message: 'Select your account type:',
        
    },
    {
        type: 'list',
        name: 'transactionType',
        choices: ["Fast Cash", "Cash Withdral", "Transfer",],
        message: 'selet your transction:',

    },
    {
        type: 'list',
        name: 'withdralmethod',
        choices: [500, 1000, 5000, 10000,],
        message: 'selet your amount:',

        when(answers) {
            return answers.transactionType == "Fast Cash"
        }

    },
    {
        type: 'list',
        name: 'withdralmethod',
        message: 'Enter your amount:',

        when(answers) {
            return answers.transactionType == "Withdraw"
        },

    }
])
if (answer.userId && answer.userpin) {
    const balance = Math.floor(Math.random()*100000);
    console.log("balance");
    const enteredamount = answer.amount;
if (balance >= enteredamount) {
    const remaning = balance - enteredamount;
    console.log("your remaning balnce is", remaning); 
   } else {
    console.log("Insufficent Balance");
   }
}
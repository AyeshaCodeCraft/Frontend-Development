// Get operator from user
var operator = prompt("Enter an operator (+, -, *, /):");

// Get numbers from user
var number1 = parseFloat(prompt("Enter the first number:"));
var number2 = parseFloat(prompt("Enter the second number:"));

// Perform calculation based on the operator
var result;
switch (operator) 
{
    case "+":
        result = number1 + number2;
        break;
    case "-":
        result = number1 - number2;
        break;
    case "*":
        result = number1 * number2;
        break;
    case "/":
        if (number2 !== 0) 
        {
            result = number1 / number2;
        } 
        else 
        {
            result = "Error! Division by zero.";
        }
        break;
    default:
        result = "Invalid operator!";
}

// Display the result
alert("Result: " + result);

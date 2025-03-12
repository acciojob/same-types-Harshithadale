function isSameType(value1, value2) {
    // Convert numeric strings to numbers
    let num1 = Number(value1);
    let num2 = Number(value2);

    // Check if both are NaN
    if (Number.isNaN(num1) && Number.isNaN(num2)) {
        return true;
    }

    // Determine the final type of each value
    let type1 = Number.isNaN(num1) ? "string" : typeof num1;
    let type2 = Number.isNaN(num2) ? "string" : typeof num2;

    // Compare types
    return type1 === type2;
}

// Get user input
let value1 = prompt("Enter Start of the Range."); 
let value2 = prompt("Enter End Of the Range.");

// Show result
alert(isSameType(value1, value2));

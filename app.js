// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromDollarToYen = (dollar) =>{  
    return (oneEuroIs.JPY / oneEuroIs.USD) * dollar;
}
const fromEuroToDollar = (euro) =>{
    return euro * oneEuroIs.USD;
}
const fromYenToPound = (yen) =>{
    
    return (oneEuroIs.GBP / oneEuroIs.JPY) * yen;;
}
// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};

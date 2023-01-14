
// this function returns void because no specific return value is given
// function calculateTax(income: number) {
//     // return 0
// }

// this function is anotated with the return value so it should return a number
// function calculateTax(income: number): number {
//     return 0
// } 

// no unused parameter and noimplicit returns is turned on
// function calculateTax(income: number): number {
//     let x;
//     if (income < 50000)
//         return income * 1.2
//     return income *1.3
// } 

// nounusedlocal will alert us if a variable is decleard without use
function calculateTax(income: number, taxYear: number): number{
    if (taxYear < 50000)
        return income * 1.2
    return income *1.3
} 

calculateTax(10000, 2022)
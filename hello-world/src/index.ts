let sales= 123_456_789;
let course = 'Typescript';
let is_published = true
let level;
 
// this will return error with type any
// function render(document: any) {
//     console.log(document);
    
// };

// we can go to tsconfig.js and change "noImplicitAny": false under type checking
function render(document) {
    console.log(document);
    
}

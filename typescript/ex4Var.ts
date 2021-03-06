/*
* Variable declaration and type example
* syntax for variable declaration
*       var [identifier] : [type] = value; 
 */

var name1:string = "Prasad";    // name is blocked scoped veraible, it is global veriable in browser
var pass:string = "Fail";

var m1:number = 95;
var m2:number = 55;
var m3:number = 38;

var avg:number = (m1 + m2 + m3)/3;

if (avg <=35) {
    pass = "Fail";
}
else if(avg > 35 || avg <= 50){
    pass = "Pass";
}
else if(avg > 50 || avg <= 60){
    pass = "Second Class";
}
else if(avg > 60 || avg <= 75){
    pass = "First Class";
}
else{
    pass = "Distinction";
}

// document.write("Avg: " + avg);
// document.write("Result: " + (pass ? "Pass" : "fail"));

console.log("Avg: " + avg);
console.log("Result: " + (pass ? "Pass" : "fail"));
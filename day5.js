//1. Create a button, on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button

function change(){
    document.querySelector("h1").innerText = "MERN stack";
}

//2. Write code to get 1st H1 element from a webpage using DOM

document.getElementsByTagName("h1")[0]; 

//3. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

let t = setInterval(
    function timerClock(){
    let clock = new Date();

    let hh = clock.getHours();
    let mm = clock.getMinutes();
    let ss = clock.getSeconds();
    
    let time = `${hh} : ${mm} : ${ss}`;

    document.querySelector("h2").innerText = time;   
 },1000);
//  timerClock();

//4. Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"

function replace(){
    document.querySelector("h3").innerText = "Welcome to Elevation academy";
}

//5. Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

$(".hide").click(function(){
    $("h4").hide();
})

//6. Given an array of 0's and 1's find out number of 0's

let arr = [1,0,1,0];

let n,count = 0; 
while (arr > 0){
    n = arr % 10;
    if(n == 0){
        count++;
    }
    arr=parseInt(arr/10);
}
// console.log(`number of zero's is ${count}`);
document.querySelector("h5").innerText = count;

//7. Given an array find out total no. of odd and even nos.

let a = [1,2,4,5,6,2,6,7,9];

let even_no = a.filter(function(n1){
    return(n1 % 2 == 0);   
});
g = even_no.length;
console.log(g);

let odd_no = a.filter(function(n1){
    return(n1 % 2 != 0);   
});
h = odd_no.length;
console.log(h);

//8. Given a string find out number of vowels 

let str = "ramakrishna";

let vowelCount = 0;
const vowels = ['a','e','i','o','u'];
for(const char of str){
    if(vowels.includes(char)){
        vowelCount++;
    }  
}
console.log(vowelCount);
 
//9. Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same

let obj1 = {
    name: "gayathri",
    skills: ['html','css','js']
}
let obj2 = {
    name: "DR",
    skills: ['html','css','js']
}

const haveSameData = function (obj1, obj2) {
    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;

    if (obj1Length === obj2Length) {
        return Object.keys(obj1).every(
            key => obj2.hasOwnProperty(key)
                && obj2[key] === obj1[key]);
    }
    return false;
}
console.log(haveSameData(obj1, obj2));

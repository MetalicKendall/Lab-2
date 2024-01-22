//task 1
let num1 = 5;
let num2 = 10;
console.log(num1 +" and " + num2);
let add = num1 + num2;
let sub = num1 - num2;
let mult = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;

console.log(`Addition: ${add} \nSubtraction: ${sub} \nMultiplication: ${mult} \nDivision: ${div} \nModulo: ${mod}`)


//task 2
let age = 18;
if(age >= 18){
    console.log("You are an adult");
}
else{
    console.log("You are a minor");
}
// could also be written as
let isAdult = age >=18 ? "You are an adult" : "You are a minor";
console.log(isAdult);


//task 3
let myName = "Kendall";
let myAge = "20";
let colors = ["red", "green", "blue"];
console.log(myName, myAge, colors[1]);



//task 4
let currentDate = new Date();
let formatDate = currentDate.toLocaleString('en-Us',{hour12:true});
console.log(formatDate);

let square = Math.sqrt(50);
console.log(square);


//task 5
bookObj = {
    title: "The Girl Who Circumnavigated Fairyland in a Ship of Her Own Making",
    published: 2011,
    keywords: ["fantasy", "fiction", "fairy tales"],
    getTitleAndYear: function(){
        return this.title + ", " + this.published;
    }
};
bookObj.keywords.push('magic');
let bookName = bookObj.getTitleAndYear();
console.log(bookObj.keywords);
console.log(bookName);


//task 6
let sumArray = function(xArray) {
    let sum = 0
    for(let i = 0; i < xArray.length; i++){
        sum += xArray[i];
    }
    return sum;
}
let numArray = [1,2,3,4,5];
console.log(sumArray(numArray));


//task 7
let isPalindrome = function(xArray){
    let endOne = xArray.length;
    for(let i = 0; i < endOne/2 ; i++){
        if(xArray[i]!== xArray[endOne - 1 - i]){
            return false;
        }
    }
    return true;
}
let stringOne = "tacocat";
console.log(isPalindrome(stringOne));


//task 8
let newButton = document.createElement("button");
newButton.innerText = "Get Window Info";
document.body.appendChild(newButton);
newButton.addEventListener('click', getWindowInfo);
function getWindowInfo(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    let url = window.location.href;
    let isOpen = !window.closed;

    alert(`Window Width: ${width} \nWindow Height: ${height} \nURL: ${url} \nIs Open: ${isOpen}`);


}



   
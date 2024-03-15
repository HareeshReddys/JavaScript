// let js= "amazing";
// if(js=="amazing")alert("Let's Enjoy the Java Script");
// console.log(40+80-80);

// let country="India"
// let continent = "Asia"
// let population = "14 million "

// console.log(country);
// console.log(continent);
// console.log(population);

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

// Your task is to write some code to help them:

// Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

// Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

// Log the value of BMIMark and BMIJohn to the console.

// BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

// let massMark = 78;
// let heightMark = 1.69;

// let massJohn = 92;
// let heightJohn=1.95;

// const BMI_M = massMark / (heightMark*heightMark);

// const BMI_J = massJohn/ (heightJohn*heightJohn);

// console.log(BMI_M,  BMI_J);

// if(BMI_M>BMI_J){
//     console.log( "Mark's BMI " + BMI_M +" is higher than John's!");
// } else {
//    console.log( "John's BMI " + BMI_J+"is higher than Mark's!");
// }

// const hasDrivingLicence = true;
// const hasGoodVision = false;

// console.log(hasDrivingLicence && hasGoodVision);

// console.log(hasDrivingLicence || hasGoodVision);
// console.log(!hasDrivingLicence || !hasGoodVision);

// if(hasDrivingLicence && hasGoodVision){
//     console.log("hareesh can drive the car");
// }else{
//     console.log("hareesh still can drive the car 🚗 😂😂");
// }

// CHALLENGE #3
// There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

// 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

// "Dolphins win the trophy" if Dolphins win, or

// "Koalas win the trophy" if Koalas win, or

// "Both win the trophy" if their average scores are equal.

// TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

// let Dolphins= 96+108+89;

// let Koalas= 88+91+110

// const scoreDolphins = Dolphins/3;

// const scoreKoalas = Koalas/3;

// console.log(scoreDolphins);

// console.log(scoreKoalas);

// if(scoreDolphins > scoreKoalas){
//     console.log("Dolphins win the trophy");
// }else if(scoreDolphins < scoreKoalas) {
//     console.log("Koalas win the trophy");
// } else{
//    console.log(" Both win the trophy");
// }

// let age = 12;

// const drink = age >= 18 ? 'wine🍷' : 'water💧' ;
// console.log(drink);

// const bill = 275;
// const tip = bill <= 300 && bill >=50 ? bill+0.15 : bill * 0.2;

// console.log(`the bill was ${bill}, the tip was ${tip}, and the total value  ${bill +tip}`);

// `use strict`;

// let hasDrivingLicence = false;
// const passTest = true;

// if(passTest) hasDrivingLicence = true;
// if(hasDrivingLicence) console.log('I can drive : D');

// function fruit(apples, Oranges){
//     const juice = `Juice with ${apples} apples and ${Oranges} oranges.`;
//     return juice;
// }
// const applejuice= fruit (5, 0);
// console.log(applejuice);

// Function declartion

// function calAge1(birthyear){
//     return 2024 - birthyear;
// }
// const age1 = calAge1(1996);

// // function expression

// const calage2 = function(birthyear){
//     return 2024-birthyear;
// }
// const age2 = calage2(1996);

// console.log(age1,age2);

// // Arrow function

// const calage3 = birthyear => 2024 - birthyear;

// const age3= calage3(1996);
// console.log(age3);

// const calag4 = (birthyear, firstName) => {

//     const age= 2024 - birthyear;
//     const retirement = 65-age;

//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(calag4(1996,' Hareesh'));
// console.log(calag4(1998, "Mahesh"));

// const calag5 = ( birthyear, firstName) => {

//     const age =
// }2024 - birthyear;

// calling one function in another function

// function cutFruitPieces(fruit){
//     return fruit *4;
// }

// function fruitPieces(apples,oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} apples and ${orangePieces} pieces of organge.`;
//     return juice;

// }

// console.log(fruitPieces(4,5));

// Reviewing the Function

// const calage = function (birthyear){
//     return 2024 - birthyear;
// }

// const yearsUntilRetirement = function(birthyear, firstName){

//     const age = calage(birthyear);
//     const retirement = 65-age;

//     if(retirement > 0){
//         console.log(` ${firstName} retires in  ${retirement} years`);
//         return retirement;
//     }else{
//    console.log(`${firstName} has already retires 🎉🎉`);
//    return `presnt age is ${age}`;
//     }

// }
//     console.log(yearsUntilRetirement(1996,"hareesh"));
//     console.log(yearsUntilRetirement(1943,"siddha reddy"));

// const retirement = (birthyear, firstName) => {

//     const age = calage(birthyear);
//     const retirement = 65- birthyear;

//     if(retirement > 0){
//                 console.log(` ${firstName} retires in  ${retirement} years`);
//                 return retirement;
//             }else{
//            console.log(`${firstName} has already retires 🎉🎉`);
//            return `presnt age is ${age}`;
// }
// }
//     console.log(retirement(1998, "hareesh"));
//     console.log(retirement(1974,"Daddy"));

//   CHALLENGE #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

// A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

// Your tasks:

// Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

// Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

// Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

// Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

// Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// const calcAverage = (a,b,c) =>  (a+b+c)/3;
// // funcation expression
// let scoreDolphins = calcAverage(44,23,71);

// let scoreKoalas =  calcAverage(65,54,49);

// const checkWinner = function(avgDolphins, avgKoalas){

//     if( avgDolphins >= 2 * avgKoalas){
//         console.log (` ${avgDolphins} with Dolphins won the cup 🏆 🐬 vs  🐨 and the score was ${avgKoalas}`);

//     } else if( avgKoalas >= 2 * avgDolphins ){
//         console.log (` ${avgKoalas} with Koalas won the cup 🏆 🐨 vs 🐬 and the score was  ${avgDolphins}`);
//     } else{
//         console.log("No one won the match 🏆 ");
//     }
// }

// checkWinner(scoreDolphins,scoreKoalas);
// checkWinner(111,576);

// scoreDolphins = calcAverage(85,54,41);
// scoreKoalas = calcAverage(23,34,27);
// checkWinner(scoreDolphins,scoreKoalas);

// Basic Array Operations

// let arra = ['Mahesh', 'Hareesh', 'Suresh', 'Ravi', 'Ganesh'];

// console.log(arra.length); // it will return the how many values present in the array.

// arra.push('Jyothi'); // it will add the value in last of the array.
// console.log(arra);

// arra.pop(); // it will remove the last value from the array
// console.log(arra);

// arra.unshift("Jyothi") // it will add the values in front of the array.

// console.log(arra);
// console.log(arra.length);

// arra.shift(); // it will remove the values which is first of array list.

// console.log(arra);
// console.log(arra.length);

// arra.push(23);
// console.log(arra.includes('Ravi'));

// const bill = 275;
// const tip = bill <= 300 && bill >=50 ? bill *0.15 : bill * 0.2;

// console.log(`the bill was ${bill}, the tip was ${tip}, and the total value  ${bill +tip}`);

// const calcTip =function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills =[125,555,44];
// const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
// const total = [bills[0]+tips[0], bills[1]+tips[1] , bills[2]+tips[2]];
// console.log(bills,tips,total);

// const details = [
//     "hareesh",
//     "Reddy",
//     2024-1996,
//     ['Ganesh, Jyothi,Pavan']
// ]
// console.log(details);

// const details1= {
//     firstName : "Hareesh",
//     secondName : "Reddy",
//     age : 2024-1996,
//     friends : ['Ganesh, Jyothi,Pavan']
// }
// console.log(details1);

// // Objects

// const seepati= {
//     firstName : "Hareesh",
//     secondName : "Reddy",
//     age : 2024-1996,
//     job: "frontend developer",
//     friends : ['Ganesh','Jyothi','Pavan', 'Bhanu ']
// }
// console.log(seepati.job);
// const input = prompt("what you want to know about hareesh, either first name, last name, age , job , friends ");

// console.log(seepati[input]);

// if(seepati[input]){
//     console.log(seepati[input]);
// }else{
//     console.log('Wrong request!😑, please ask from the below first name, last name, age , job , friends')
// }

// seepati.location = " Tirupati";
// seepati["instagram"] = "Hareesh_Reddy_seepati";

// console.log(seepati);

// if(seepati[input]){
//     console.log(seepati[input]);
// }else{
//     console.log('Wrong request!😑, please ask from the below first name, last name, age , job , friends')
// }

// // challange

// console.log(`${seepati.firstName} has ${seepati.friends.length} friend and his best friend is ${seepati.friends[0]} `);

// const seepati= {
//         firstName : "Hareesh",
//         secondName : "Reddy",
//         birthYear: 1996,
//         job: "frontend developer",
//         friends : ['Ganesh','Jyothi','Pavan', 'Bhanu '],
//         hasDriverLicense : true,

//         calcage: function(){
//             console.log(this);
//             return 2024 - this.birthYear;
//         },

//         getSummary: function(){
//        return ` ${this.firstName} is a ${this.calcage()} years old ${seepati.job}, and he has ${this.hasDriverLicense ? 'a' : 'No'} drivers's license`

//         }
//     };

//     console.log(seepati.calcage());

//     console.log(seepati.getSummary());

// challange 3

// let calcBMI = function(){
//     return mass/(height*height)
// }

// const mark = {
//     fullName : "mark",
//     mass :  78,
//     height : 1.69,
//     totalBMI_M : calcBMI(),
// }
// const john = {

//     fullName : "john",
//     mass :  92,
//     height : 1.95,
//     totalBMI_J : calcBMI(),

// }

// console.log(mark);

//     const seepati = [
//             "hareesh",
//             "Reddy",
//             2024-1996,
//             ['Ganesh, Jyothi,Pavan']
//         ]

// for (let i=0; i < seepati.length; i++){
//     console.log(seepati[i], typeof seepati[i]);
// }

// const years = [1998,1996,1995,2004];
// const age = [];

// for(let i=0; i<years.length; i++){
//     age.push(2024-years[i]);
// }
// console.log(age);

// for(let exercise=1; exercise <6 ; exercise++){
//     console.log(`-----Exercise started ${exercise}`);

//     for(let exercise=1 ; exercise <7; exercise++){
//         console.log(` Wightlifiting ${exercise} 🏋️‍♀️`)
//     }

// }

// const calcTip = function (bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }

//   /* Write your code below. Good luck! 🙂 */

//   const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//   const tips =[];
//   const totals=[];

//   for(let i=0;i<bills.length;i++){
//     const tip = calcTip(bills[i]);
//       tips.push(tip);
//       totals.push(tip + bills[i]);
//   }

//   console.log(bills,tips,totals);

// calling one function from another function

const cutpieces = (fruit) => fruit * 4;

const cutFruitPieces = (apples, oranges) => {
  const cutapple = cutpieces(apples);
  const cutOranges = cutpieces(oranges);

  const result = `juice apple ${cutapple},  cut Oranges ${cutOranges}`;

  return result;
};

console.log(cutFruitPieces(4, 5));

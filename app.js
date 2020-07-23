//Chapter 01

//Task.01
//alert("Welcome to My Website");

//task.02
//alert("Error! Please enter a valid password");

//task.03
//alert("Welcome to JS Land... \n Happy Coding!");

//task.04
//alert("Welcome to JS Land...");

//task.5
//console.log("Hello... I can run JS through my web browser's console");

//Chapter 02

//Task.01
//var username;

//task.02
//var myName = "Aniq Ali";

//task.03
//var message = "Hello World";
//alert(message);

//task.4
//var stuname = "Jhon Doe";
//var age = "15 years old";
//var course = "Certified Mobile Application Development";
//alert(stuname);
//alert(age);
//alert(course);

//task 5
//var email = "Aneeqkhananeeq99@gmail.com";
//alert("My email address is " +email);

//task 6
//var book = "A smarter way to learn Javascript";
//alert("I am trying to learn form the book " +book);

//task 7
//document.write("Yah! I can write HTML content thorugh Javscript");

//task 8
//var asd = "----------@?@----------";
//alert(asd);

//Chapter 03

//Task 01
//var age = 20;
//alert("I am " + age + " years old");

//task 2
//var birthYear = 2000;
//document.write("My birth year is " +birthYear);
//document.write("<br> Data typr of my declared variable is number");

//task 3
//var name = "John Doe";
//var product = "T-Shirts";
//var quantity = 5;
//document.write(name +" ordered "+ quantity +" "+ product + " on XYZ Clothing store");

//Chapter 04

//Task 01
//var name, name1, name2;

//task 3
//document.write("<h3> Rules for naming JS variables </h3>");
//document.write("Variables names can only contain , numbers, $ and _, For example : $my_1stVariable");
//document.write("<br> Variables must begin with a letter, $ or_ , For example : $name, _name or name");
//document.write("<br> Variable names are case sensitive");
//document.write("<br> Variables names should not be JS keywords");

//Chapter 05

//Task 01
//var a = 3, b = 5, c = a+b;
//document.write("Sum of " + a + " and " + b + " is " +c);

//task 2
//var a = 3, b = 5,
//c = a+b, d = a-b, e = a*b, f = a/b;
//document.write("Sum of " + a + " and " + b + " is " +c);
//document.write("<br> Sub of " + a + " and " + b + " is " +d);
//document.write("<br> Multiply of " + a + " and " + b + " is " +e);
//document.write("<br> Division of " + a + " and " + b + " is " +f);

//task 3
//var asd = 5, asd1 = 13;
//document.write("Value after variable declaration is undefined");
//document.write("<br> Initial value is: "+ asd++);
//document.write("<br> value after Increment is: "+ asd);
//document.write("<br> Value after addition is: "+ asd1--);
//document.write("<br> Value after decrement is: "+ asd1);
//document.write("<br> The remainder is: "+ 0);

//task 4
//var ticket = 600;
//document.write("Total cost to buy 5 tickets to a movie is: "+ ticket*5 +" PKR");

//task 5
//document.write("<h4> Table of 4 </h4>");
//document.write(4 +" x "+ 1 +" = "+ 4);
//document.write("<br>"+ 4 +" x "+ 2 +" = "+ 8);
//document.write("<br>"+ 4 +" x "+ 3 +" = "+ 12);
//document.write("<br>"+ 4 +" x "+ 4 +" = "+ 16);
//document.write("<br>"+ 4 +" x "+ 5 +" = "+ 20);
//document.write("<br>"+ 4 +" x "+ 6 +" = "+ 24);
//document.write("<br>"+ 4 +" x "+ 7 +" = "+ 28);
//document.write("<br>"+ 4 +" x "+ 8 +" = "+ 32);
//document.write("<br>"+ 4 +" x "+ 9 +" = "+ 36);
//document.write("<br>"+ 4 +" x "+ 10 +" = "+ 40);

//task 6
//var item1 = 650;
//var item2 = 100;
//var quantity1 = 3;
//var quantity2 = 7;
//var shipping = 100;
//var total = (item1*quantity1) + (item2*quantity2) + shipping;
//document.write("otal cost of your order is: "+ total); 

//task 7
//var total = 980;
//var marks = 804;
//var per = (804/980) * 100;
//document.write("Total marks: " +total);
//document.write("<br> MArks obtained: " +marks);
//document.write("<br> Percentage: " +per);

//task 8
//var dollar = 104.80;
//var riyal = 28;
//document.write("<h4> Currency in PKR </h4>");
//document.write("<br> Total currency in PKR is: "+ dollar*10 + "+" + riyal*25 +"="+ 1748);

//task 9
//var current = 2020;
//var birth = 1991;
//var age = 29;
//document.write("Current year: " +current);
//document.write("<br> Birth year " +birth);
//document.write("<br> Your age " +age);

//Chapter 06 to 09

//Task 1
//var a = prompt("Enter a number: ");
//document.write("Result: ");
//document.write("<br> The value of a is " +a);
//document.write("<br> ........................................");
//document.write("<br> The value of ++a is: " + ++a);
//document.write("<br> Now the value of a is: " +a);
//document.write("<br> The value of a++ is: " +a);
//document.write("<br> Now the value of a is: " + ++a);
//document.write("<br> The value of --a is: " + --a);
//document.write("<br> Now the value of a is: " +a);
//document.write("<br> The vlue of a-- is: " +a);
//document.write("<br> Now the value of a is: " + --a);

//task 2
//var a = prompt("Enter your name: ");
//alert("Hey " +a +", Welcome to our website");

//task 3
//var sub1 = prompt("Enter 1st subject name: ");
//var sub2 = prompt("Enter 2nd subject name: ");
//var sub3 = prompt("Enter 3rd subject name: ");
//var totalMarks = 100;
//var user1 = prompt("Enter your " +sub1+ " marks: ");
//var user2 = prompt("Enter your " +sub2+ " marks: ");
//var user3 = prompt("Enter your " +sub3+ " marks: ");
//var per1 = (user1/100) * 100;
//var per2 = (user2/100) * 100;
//var per3 = (user3/100) * 100;
//var total1 = 300;
//var obt1 = user1 + user2 + user3;
//document.write("Subject T.Marks Obt.Marks Percentage");
//document.write("<br>"+ sub1 + totalMarks + user1 + per1);
//document.write("<br>"+ sub2 + totalMarks + user2 + per2);
//document.write("<br>"+ sub3 + totalMarks + user3 + per3);
//document.write(" "+" "+ total1 + obt1);

//Chapter 09 to 11

//task 01
//var user = prompt("Enter City Name: ");
//var arr = ['hyderabad','karachi','peshawar','islamabad'];
//if(user = 'karachi'){
//    document.write("Welcome to city of lights");
//}

//task 02
//var gender = prompt("Enter your gender: ");
//var male1 = "Male", male2 = "male";
//if(gender == male1 || gender == male2){
//    document.write("Good Morning Sir");
//}
//else{
//    document.write("Good Morning Madam");
//}

//task 03
//var color1 = "Red", color2 = "Green", color3 = "Yellow";
//document.write("Signal Color" +" "+ "Message");
//document.write("<br>"+ color1 +"-----------"+ "Must Stop");
//document.write("<br>"+ color2 +"--------"+ "Move Now");
//document.write("<br>"+ color3 +"-------"+ "Ready to Move");

//task 4
//var user = prompt("Enter Your Fuel Quantity in Litres: ");
//var fuel = 0.25;
//if(user < 0.25){
//    alert("Please refill the fuel in car");
//}
//else{
//    alert("It's good");
//}

//Chapter 12 to 13

//task 01
//var int1 = prompt("Enter 1st No. ");
//var int2 = prompt("Enter 2nd No. ");
//if(int1 == int2){
//    alert("The integers are equal");
//}
//else if (int1 > int2){
//    alert("1st No. is larger");
//}
//else{
//    alert("2nd No. is larger");
//}

// Chapter 21-25

//Task 01
//var first = prompt("Enter you first name: ");
//var last = prompt("Enter your last name: ");
//fullName = [first, last];
//document.write("Welcome "+ fullName );

//task 2
//var mbl = prompt("Enter your favorite mobile name: ");
//mbl1 = mbl.length;
//document.write("My favorite phone is: "+mbl);
//document.write("<br> Length of string: "+mbl1);

//task 3
//name = "Pakistani";
//name1 = name.indexOf('n');
//document.write("String: "+name);
//document.write("<br> Index of 'n': "+name1);

//task 4
//name = "Hello World";
//name1 = name.lastIndexOf('l');
//document.write("String: "+name);
//document.write("<br> Last index of 'l': "+name1);

//task 5
//name = "Pakistani";
//document.write("String: "+name);
//document.write("<br> Character at index 3: "+ name.charAt(3));

//task 6
//var first = prompt("Enter your first name: ");
//var last = prompt("Enter last name: ");
//fullName = first.concat(last);
//alert("Welcome "+fullName);

//task 7
//var city = "Hyderabad";
//var city1 = city.replace("Hyder", "Islam");
//document.write(city1);

//task 8
//var name = "Ali and sammi are good friends. Ali and sami are playing cricket and football together";
//var name1 = name.replace(/and/g, "&");
//document.write(name1);

//task 9
//var name = prompt("Enter any fruit name in small: ");
//var name1 = name.toUpperCase(name);
//document.write(name1);

//task 10
// var name = prompt("Enter name: ");
// name = name.toLowerCase();
// var names = ["cake","apple pie","cookie","chips","patties"]
// if (names.indexOf("cake") !== -1 || 
//     names.indexOf("apple pie") !== -1 || 
//     names.indexOf("cookie") !== -1 || 
//     names.indexOf("chips") !== -1 || 
//     names.indexOf("patties") !== -1) {
//     alert("Available");
// }
// else
// {
//     alert("Not available");
// }

//task 11
//var name = "Pakistan";
//var name1 = name.length;
//document.write("User Input: "+name);
//document.write("<br> LAst character of input: " +name.charAt(name1 - 1));

//task 12
//var name = "the quick brown fox jumps over the lazy dog";
//var name1 = name.match(/the/g);
//document.write("Text: the quick brown fox jumps over the lazy dog");
//document.write("<br> There are two occurences of word: 'the'");

//Chapter 26 to 30

//TAsk 01
// var number = prompt("Enter any positive decimal value: ");
// document.write("Number: " +number);
// document.write("<br> Round off value of the number: " +Math.round(number));
// document.write("<br> Floor value of number: " +Math.floor(number));
// document.write("<br> Ceil value of number: " +Math.ceil(number));

//task 2
// var number = prompt("Enter any negative point value: ");
// document.write("Number: " +number);
// document.write("<br> Round off value of the number: " +Math.round(number));
// document.write("<br> Floor value of number: " +Math.floor(number));
// document.write("<br> Ceil value of number: " +Math.ceil(number));

//task 3
// var num = prompt("Enter any negative value: For e.g. -4 ");
// document.write("The absilute value of " +num+ " is: " +Math.abs(num));

//task 4
// document.write("Random dice value: " +Math.random());

//task 5
// var heads = 1;
// var tails = 2;
// var toss = Math.random() * 2;
// var floor = Math.floor(toss)
// if(floor === 0){
//     document.write("Heads: You win <br> Random Coin Value: 1")
// } else if(floor === 1)
// {
//     document.write("Tails: You loss <br> Random Coin Value: 0")
// }

//task 6
//document.write("random number b/w 1 to 100: " +Math.floor(Math.random() * 100));

//task 7
// var user = prompt("Enter your weight in Kgs: ");
// document.write("The weight of user in Kilograms is: " +user+ "kgs");

//task 08
// var secret = Math.floor(Math.random() * 10);
// var num = prompt("Enter a number b/w 1 to 10");
// if(num === secret){
//     alert("MAtched!");
// }
// else{
//     alert("Try Again");
// }

//Chapter 31 to 34

//TAsk 01
// var date = new Date();
// document.write(date);

//task 2
// var month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October",
//                 "November", "December"];
// var date = new Date();
// document.write("The current month is: " + month[date.getMonth()]);

//task 3
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var d = new Date();
// var d1 = days[d.getDay()];
// var d2 = d1.substring(0,3);
// document.write("Today is " +d2);  

//tasl 4
// var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var date = new Date();
// var day1 = days[date.getDay()];
// if(day1 === 'Saturday' || day1 === 'Sunday'){
//     alert("It's fun day");
// }
// else{
//     alert("Working day");
// }

//task 5
// var d = new Date();
// var d1 = d.getHours();
// if(d1 >= '00'){
//     alert("It's AM");
// }
// else{
//     alert("It;s PM");
// }

//task 6
// var date = new Date(prompt("Enter your date of birth: e.g. Oct 12, 2000"));
// var date1 = date.getTime();
// var today = new Date();
// var today1 = today.getTime();
// var diff = today1 - date1;
// var acc = Math.floor(diff/(1000*60*60*24*30*12));
// document.write("Your age is: " +acc);

//task 7
// var name = "Ali";
// var month = "June";
// var unit = 300;
// var unitChrg = 18;
// var netAmo = 300*18;
// var late = 120;
// var lateAmo = netAmo + 120;
// document.write("<h3> K-Electric Bill </h3>");
// document.write("<br> Customer Name: " +name);
// document.write("<br> Month: " +month);
// document.write("<br> Number of Units: " +unit);
// document.write("<br> Charges per Unit: " +unitChrg);
// document.write("<br> Net Amount Payable (within due date): " +netAmo);
// document.write("<br> Late payment Surcharge: " +late);
// document.write("<br> Gross Amount Payable (after due date): " +lateAmo);

//Chapter 35 to 38

//Task 01
// function myFunc() {
//     var date = new Date();
//     document.write(date);
// }
// myFunc();

//task 2
// function myFunc() {
//     var name = prompt("Enter your name");
//     var name1 = prompt("Enter your last name");
//     document.write("Welcome " +name);
//     document.write(name1);
// }
// myFunc();

//task 3
// function myFunc() {
//     var a = prompt("Enter first no:");
//     var b = prompt("Enter second no:");
//     var c = a + b;
//     document.write("Addition of given numbers is: " +c);
// }
// myFunc();

//task 4
// function myFunc(a, b, c) {
//     a = prompt("Enter First number");
//     b = prompt("Enter Operator");
//     c = prompt("Enter second value");
    
//         if (b === '+') {
//             alert((+a)+(+c));
//         }
//         else if(b === '-'){
//             alert(a-c);
//         }
//         else if(b === '*'){
//             alert(a*c);
//         }
//         else if(b === "/"){
//             alert(a/c);
//         }
//         else{
//             alert((a/c)*100 +'%');
//         }

// }
// myFunc();

//task 5
// function myFunc(a) {
//     a = prompt("Enter a number");
//     document.write("The square of " +a+ " is: " +a*a);
// }
// myFunc();

//tsk 6
// function fact(n) {
//     var fact1 = 1;
//     if(n > 1) {
//         for(var i = 2; i <= n; i++) {
//             fact1 *= i;
//         }
//     }
//     return fact1;
// }
// document.write(fact(4));

//task 7
// function myFunc() {
//     var a = prompt("Enter first number");
//     var b = prompt("Enter second number");
//     for(num1 = a; num1 <= b; num1++){
//         console.log("Counting from " +a+ " to" +b+ " is: " +num1);
//     }
// }

//task 8
// function myFunc(width, height, area) {
//     width = prompt("Enter width");
//     height = prompt("Enter height");
//     area = (width * height);
//     alert("The area of rectangle is: " +area);
// }
// myFunc();

//task 9
// function myFunc(name)
// {
//  return name.replace(/\w*/g,
//     function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     }
// );
// }
// alert(myFunc('the brown fox'));
// myFunc();


// Chapter 38 to 42

// Task 01
// function myFunc() {
//     var a = prompt("Enter any year: ");
//     if (a === '2012' || a === '2016' || a === '2020') {
//         alert("It's a Leap Year");
//     }
//     else{
//         alert("It's not a leap year");
//     }
// }
// myFunc();

//task 2
// var a, b, c, s;
// function myFunc() {
//     a = prompt("Enter 1st No.");
//     b = prompt("Enter 2nd No.");
//     c = prompt("Enter 3rd No.");
//     s = (a + b + c)/2;
    
// }
// function myFunc1() {
//     myFunc();
//     var area = s* (s - a)*(s - b)*(s - c);
//     alert("The area of triangle is: " +area);
    
// }
// myFunc1();

//task 3
// var name, sub1, sub2, sub3, avg, per;
// function myFunc() {
//     name = prompt("Enter your name");
//     sub1 = parseInt(prompt("Enter Subject 1 marks"));
//     sub2 = parseInt(prompt("Enter Subject 2 marks"));
//     sub3 = parseInt(prompt("Enter Subject 3 marks"));

//     average();
//     percentage();

//     alert("The Average value: "+ avg +" "+"The Percentage is: "+ per);
// }
// myFunc();


// function average() {
//     avg = (sub1+sub2+sub3)/3;

// }
// function percentage() {
//     per = ((sub1+sub2+sub3)*100)/300;
// }

//task 4
// var a, meter1, feet1, inch1, cen1;
// function myFunc() {
//     a = prompt("Enter distance in Km");

//     meters();
//     feet();
//     inches();
//     centimeter();

//     document.write("Your distance in km: " +a+ "<br>");
//     document.write("Your distance in meters: " +meter1+ "<br>");
//     document.write("Your distance in feet: " +feet1+ "<br>");
//     document.write("Your distance in inches: " +inch1+ "<br>");
//     document.write("Your distance in centimeter: " +cen1);
// }
//     myFunc();

// function meters() {
//     meter1 = a*1000;
// }
// function feet() {
//     feet1 = a*3280.38;
// }
// function inches() {
//     inch1 = a*39370.1;
// }
// function centimeter() {
//     cen1 = a*100000;
// }

//Chapter 43 to 48

//Task 01
// function myFunc() {
//     alert("Welcome")
// }

//task 2
// function myFunc() {
//     alert("Thanks for puschasing phone with us!")
// }

//task 3
// function myFunc() {
//     document.getElementById('table1').deleteRow(1);
// }

//task 4
// function change() {
//     var image1 = document.getElementById('myimg');
//     image1.src = 'img1.jpg';
// }

// function replace() {
//     var image1 = document.getElementById('myimg');
//     image1.src = 'img.jpg'
// }

//Chapter 49 to 52

//task 01
// function myFunc() {
//     var name1 = document.getElementById('input1').value;
//     var name2 = document.getElementById('input2').value;
//     var name3 = document.getElementById('input3').value;

//     document.write("Your first name " +name+ "<br>");
//     document.write("Your last name " +name1+ "<br>");
//     document.write("Your email " +email);
// }

//task 02
// function myFunc() {
//     var txt = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos itaque placeat a expedita unde sit, corrupti explicabo inventore et, provident eum quia aut delectus reiciendis, repellat earum adipisci perferendis tenetur.'
//     var para = document.getElementById('para1').innerHTML = txt;
// }


// task 03
// var table = document.getElementById('myTable');
// var form = document.getElementById('form1');

// function myFunc() {
//     var name1 = document.getElementById('input1').value;
//     var name2 = document.getElementById('input2').value;
//     var name3 = document.getElementById('input3').value;
//     var name4 = document.getElementById('input4').value;
//     var name5 = document.getElementById('input5').value;
//     var name6 = document.getElementById('input6').value;
//     var name7 = document.getElementById('input7').value;
//     table.style.display = 'block';
//     form.style.display = 'none';
//     document.getElementById('row1').innerHTML = name1;
//     document.getElementById('row2').innerHTML = name2;
//     document.getElementById('row3').innerHTML = name3;
//     document.getElementById('row4').innerHTML = name4;
//     document.getElementById('row5').innerHTML = name5;
//     document.getElementById('row6').innerHTML = name6;
//     document.getElementById('row7').innerHTML = name7;
//     document.getElementById('row8').innerHTML = name8;
    
// }
// function editRow() {
//     form.style.display = 'block';
//     table.style.display = 'none';
// }
// function deleteRow() {
//     document.getElementById('myTable').deleteRow(1);
// }
















































































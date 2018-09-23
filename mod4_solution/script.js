var array = new Array();
array[0] = " Yakov";
array[1] = 2;
array[2] = function (name){
	console.log("Hello" + name);
};
array[3] = {course: "Good Bye John"};
 
 console.log(array);
 array[2](array[0]);
 console.log(array[3].course);
 
array[3] = {course: "Good Bye Jen"};
console.log(array[3].course);
array[3] = {course: "Good Bye Jason"};
console.log(array[3].course);

array[3] = {course: "Hello Paul"};
console.log(array[3].course);

array[3] = {course: "Hello Frank"};
console.log(array[3].course);

array[3] = {course: "Hello Paula"};
console.log(array[3].course);

array[3] = {course: "Hello Laura"};
console.log(array[3].course);

array[3] = {course: "Good Bye Jim"};
console.log(array[3].course);

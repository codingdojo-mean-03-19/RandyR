// 1
//console.log(hello);                                   
//var hello = 'world';
var hello = 'world';
console.log(hello);

//2
// varcopy needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle)
var needle = 'haystack';
function test(){
    var needle = 'magnet';
    console.log(needle)
    }
test()

//3
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan);

//4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
var food = 'chicken';
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
eat();
console.log(food);

//5
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
var mean = function(){
    var food = 'fish';
    console.log(food);
    food = 'chicken';
    console.log(food);
}
mean();
console.log(food);

//6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
var genre = 'disco';
function rewind(){
  var genre = 'r&b';
  console.log(genre);
  genre = 'rock';
  console.log(genre);
}
rewind();
console.log(genre);

//7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);
dojo = "san jose";
console.log(dojo);
function learn() {
	var dojo = "burbank";
	console.log(dojo);
    dojo = "seattle";
	console.log(dojo);
}
learn();
console.log(dojo);

//8
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }
function makeDojo(name, students){
    const dojo = {};
        if(dojo.students > 50){
        dojo.hiring = true;
        }
        else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    dojo.students = students;
    dojo.name = name;
        return dojo;
}
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));




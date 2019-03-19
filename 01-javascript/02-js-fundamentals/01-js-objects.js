// 30 minutes max
//Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function studentsFunc (array){
    for (let i in array){
        console.log('Name: ' + array[i].name + ', Cohort: ', array[i].cohort)
    }
}
studentsFunc(students);

//Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };


 function usersFunc(array){
    for(let i in users) {
        console.log(i.toUpperCase())
        for(let [nr, user] of users[i].entries()){
            nameLength = user.first_name.length + user.last_name.length;
            console.log(++nr + ' - ' + user.last_name + ', ' + user.first_name + ' - ' + nameLength);
        };
    };
};

usersFunc(users);



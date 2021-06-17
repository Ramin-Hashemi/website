var user = {
    
    username: "Nimar",
    password: "123456",
}

alert("Make your Profile!");
var age = prompt("What is your Current Age?");
function checkAge() {
    if (Number(age) < 18) {
        alert("Sorry, you are too young to make profile. Powering off");
        return "Sorry, you are too young to make profile. Powering off";
    }
        else if (Number(userAge) === 18) {
        alert("Congratulations on your first make profile. Enjoy the ride!");
        return "Congratulations on your first make profile. Enjoy the ride!";
        }
        
        else {
        alert("Powering On. Enjoy the ride!");
        return "Powering On. Enjoy the ride!";
        }
}    

checkDriverAge();

var username = prompt("What is your Username?");
var password = prompt("What is your Password?");

var dataBase = [
    {
        username: user.username,
        password: user.password,
    },
];
var newsFeed = [
    {
        username: user.username,
        timeline: "Introducing Management Engineering",
    },
    
    {
        username: "Suzi",
        timeline: "How Does it Works?",
    },
];
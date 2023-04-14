const userBirthday = +prompt ('Your birthday?');
let resultAge;
if (userBirthday == '') {
    alert ("It's a shame that you don't want to enter your birthday");
    resultAge = `You don't give an information about birthday`;
} else {
    resultAge = `You are ${2023 - userBirthday} years old`;
}

const userCity = prompt ('Your city?');
let resultCity;
if (userCity == null) {
    alert ("It's a shame that you don't want to enter your city");
    resultCity = `You don't give an information about city`;
} else {
    resultCity = userCity == 'Kyiv'? `You live in capital ${userCity}` : 
    userCity == 'London'? `You live in capital ${userCity}` : 
    userCity == 'Washington'? `You live in capital ${userCity}` : `You live in city ${userCity}`;
}

const userSport = prompt ('Your favorite sport?');
let resultSport;
if (userSport == null) {
    alert ("It's a shame that you don't want to enter your sport");
    resultSport = `You don't give an information about sport`;
} else {
    switch (userSport) {
        case 'Football':
            resultSport = 'Cool, do you want to be Messi? ';
            break;
        case 'Boxing':
            resultSport = 'Cool, do you want to be Usyk? ';
            break;
        case 'Basketball':
            resultSport = 'Cool, do you want to be LeBron James? ';
            break;
        default:
        resultSport = `Your favorite sport is ${userSport}`;
    }
}


alert (`${resultAge}.
${resultCity}.
${resultSport}.`);
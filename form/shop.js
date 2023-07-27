let errorBox = [];
let nameInput;
let surnameInput;
let birthday;
let gender;
let city;
let adress;
let table

let ValidationForm = () => {
    nameInput = document.getElementById('name');
    surnameInput = document.getElementById('surname');
    birthday = document.getElementById('birthday');
    let genderMen = document.getElementById('men');
    let genderWomen = document.getElementById('women');
    adress = document.getElementById('adress');    
    if(nameInput.value.trim() == '') {
        alert(`Введіть імя`);
        errorBox.push('error')
    }
    if(surnameInput.value.trim() == '') {
        alert(`Введіть прізвище`);
        errorBox.push('error')
    }
    if(birthday.value.trim() == '') {
        alert(`Введіть дату народження`);
        errorBox.push('error')
    }
    if(!genderMen.checked && !genderWomen.checked ) {
        alert(`Оберіть стать`);
        errorBox.push('error')
    }
    if(adress.value.trim() == '') {
        alert(`Введіть адресу`);
        errorBox.push('error')
    }
    if(errorBox.length) {
        return false;
    }    
    return true;
}


const btnSubmit = document.querySelector('.button');
const form = document.querySelector('.form');
btnSubmit.onclick = function() {  
    if(ValidationForm()) {
        form.submit();
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if(xhr.status === 200 && xhr.readyState === 4) {            
                let responseData = JSON.parse(xhr.responseText)
                city = responseData.city
                surnameInput = responseData.suname
                nameInput = responseData.name
                birthday = responseData.birthday
                gender = responseData.gender
                adress = responseData.adress
                lenguage = responseData.lenguage
                getTable();
                getInfoInTable();                  
            } else {
                console.log('error');
            }    
        }
        xhr.open ('GET', 'http://localhost:3000/submit', true);          
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();             
    }
       
};

const getTable = function() {    
    table = document.querySelector('.table')
    form.classList.toggle('formDisplay')    
    table.classList.toggle('tableDisplay')
};

const getInfoInTable = function() {
    const tableName = document.getElementById('tableName')
    const tableBirthday = document.getElementById('tableBirthday')
    const tableGender = document.getElementById('tableGender')
    const tableCity = document.getElementById('tableCity')
    const tableAdress = document.getElementById('tableAdress')
    const tableLenguage = document.getElementById('tableLenguage')

    tableName.innerHTML = `${surnameInput} ${nameInput}`
    tableBirthday.innerHTML = `${birthday}`
    tableGender.innerHTML = `${gender}`
    tableCity.innerHTML = `${city}`
    tableAdress.innerHTML = `${adress}`
    tableLenguage.innerHTML = `${lenguage}`    
}

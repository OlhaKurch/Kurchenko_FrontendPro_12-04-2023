const table = document.createElement('table');
let numberTr = prompt('How many row do you need?')
let numberTв = prompt('How many column do you need?')
let num = 0;
for (let i = 1; i <= numberTr; i++) {
    let row = document.createElement('tr');
    table.append(row);        
    for (let y = 1; y <= numberTв; y++) {
        let column = document.createElement('td');
        num++;
        column.innerHTML = num;
        column.className = "table";
        table.append(column);
    }
}


document.body.append(table);
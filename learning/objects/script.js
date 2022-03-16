function isEmpty(obj) {
    for (let field in obj) {
        return false;
    }
    return true;
}

function calcSalariesSum(salaries) {
    let sum = 0;
    for (let key in salaries) {
        sum = sum + salaries[key];
    }
    return sum;
}

let div = document.createElement('div');
let isEmptyP = document.createElement('p');
isEmptyP.innerText = "Задание на создание функции isEmpty";

let shedule = {};
shedule["8:30"] = "get up";

isEmptyP.innerHTML += `<pre>\n\nshedule = {\n\t\"8:30\" = \"get up\"\n}\n\n\"isEmpty\" function result = ${isEmpty(shedule)}<pre>`;

delete shedule["8:30"];

isEmptyP.innerHTML += `<pre>delete shedule[\"8:30\"]\n\n\"isEmpty\" function result = ${isEmpty(shedule)}<pre>`;
div.appendChild(isEmptyP);

let sumSalariesP = document.createElement('p');
sumSalariesP.innerText = "Задание на создание функции суммирования значений полей"
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

sumSalariesP.innerHTML += `<pre>\nlet salaries = {\n\tJohn: 100,\n\tAnn: 160\n\tPete: 130\n}\n\n\"calcSalariesSum\" function result = ${calcSalariesSum(salaries)}<pre>`;

div.appendChild(sumSalariesP);
document.body.append(div);
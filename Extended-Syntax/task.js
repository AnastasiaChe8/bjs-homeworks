
function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    "use strict";
    let x;
    let x_2;
    let d = b * b - 4 * a * c;
    if (d < 0) {
        console.log ("Уравнение не имеет корней");
    }
    else if (d == 0) {
        x= -b / (2*a);
        console.log ("Уравнение имеет один корень = " + x);
        return
    }
    else {
        let k = Math.sqrt(d)
        x = (-b + k)/2 * a;
        x_2 = (-b - k)/2 * a;
        console.log ("Уравнение имеет два корня: X максимальное = " + x + " X минимальное = " + x_2);
        return
    }
}
getResult(8,93,6);

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name, dateOfBirthday) {
  let today = new Date();
  let nowYear = dateOfBirthday;
  let result = today.getFullYear() - nowYear.getFullYear();
if (result > 18) {
  console.log ("Не желаете ли олд-фэшн " + name + "?");
} else {
  console.log ("Сожалею," + name + " , но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!");
}
return
}


function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
  let sum = 0;

  for (let i=0; i<marks.length; i++){
    sum += marks[i];}

    //console.log(sum); проверка суммы

  let average = sum/marks.length
  if (marks.length>5) {
    marks.splice(5);
   //return marks.length; /// "обновить значение длины массива после условия"
    console.log ("Общее число оценок больше пяти. Средняя оценка исходя из первых пяти оценок: " + average);
    return average;
 }



  else {
    console.log ("Средняя оценка: " + average);
    return average;
  }
}

getAverageMark ([5,2,2,2,2,4,2])

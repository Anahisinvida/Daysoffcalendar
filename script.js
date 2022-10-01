console.log("Probando, Probando")

//Inputs HTML

const inputday= document.getElementById("dayInput")
const inputmonth= document.getElementById("monthInput")
const inputyear= document.getElementById("yearInput")
const inputResultado= document.getElementById("resultInput")

console.log("so far i'm just guessing")

//Function

const myDate = () => {
    const weekDate = new Date(inputyear.value, inputmonth.value -1 , inputday.value)
    console.log(weekDate)
    const getWeekDay = weekDate.getDay();
    let weekDay 

    switch(getWeekDay){
        case 0:
            weekDay = "Domingo"
            break;
        case 6:
            weekDay = "Sábado"
             break;
        case 1:
            weekDay = "Lunes"
            break;
        case 2:
            weekDay = "Martes"
            break;
        case 3:
            weekDay = "Miércoles"
            break;
        case 4:
            weekDay = "Jueves"
            break;
        case 5:
            weekDay = "Viernes"
            break;
    }

    if (getWeekDay === 0 || getWeekDay === 6 ) {
        inputResultado.value = `${weekDay} , it's beer time`
       } else {
        inputResultado.value = `${weekDay} , it's work time`
       }
} 

//BOTTON
const btncalculate = document.getElementById ("btn")
btncalculate.addEventListener("click", myDate)








console.log("Probando, Probando")

const inputday= document.getElementById("dayInput")
const inputmonth= document.getElementById("monthInput")
const inputyear= document.getElementById("yearInput")
const inputResultado= document.getElementById("resultInput")

console.log("so far i'm just guessing")

//OBJETO 

const myDate = () => {
    const weekDate = new Date(inputyear.value, inputmonth.value -1 , inputday.value)
    console.log(weekDate)
    const getWeekDay = weekDate.getDay();
    let weekDay 

    switch(getWeekDay){
        case 0:
            weekDay = "Domingo"
        case 6:
            weekDay = "Sábado"
             break;
        case 1:
            weekDay = "Lunes"
        case 2:
            weekDay = "Martes"
            
        case 3:
            weekDay = "Miércoles"
         
        case 4:
            weekDay = "Jueves"
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

  
console.log(`Today is  ${myDate.getDay()} so is beer day`);
const btncalculate = document.getElementById ("btn")
btncalculate.addEventListener("click", myDate)








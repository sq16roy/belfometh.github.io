const ballOne = document.getElementById("ballOne");
const ballTwo = document.getElementById("ballTwo");
const ballThree = document.getElementById("ballThree");
const ballFour = document.getElementById("ballFour");
const ballFive = document.getElementById("ballFive");
const ballSix = document.getElementById("ballSix");
const ballSeven = document.getElementById("ballSeven");
const ballEight = document.getElementById("ballEight");
let outDays = [];
let inDays = [];

const date_input = document.getElementById('date_input').addEventListener("change", (event) => {
    const currentDate = new Date(event.target.value);
    const currentMonth = (currentDate.getMonth() + 1) <= 9 ? `0${currentDate.getMonth() +1}` : currentDate.getMonth() + 1;
    const currentDay = currentDate.getUTCDate()  <= 9 ? `0${currentDate.getUTCDate()}` : currentDate.getUTCDate();
    const currentYear = numberToArray(currentDate.getFullYear());

    generateNumbers(currentDay, currentMonth, currentYear);

     ballOne.innerHTML = outDays[0];
     ballTwo.innerHTML = inDays[0];
     ballThree.innerHTML = outDays[1];
     ballFour.innerHTML = inDays[1];
     ballFive.innerHTML = inDays[2];
     ballSix.innerHTML = outDays[2];
     ballSeven.innerHTML = inDays[3];
     ballEight.innerHTML = outDays[3];


    console.log("full", event.target.value, "dia", currentDay, "mes", currentMonth, "anno", currentYear, outDays, inDays);
});


const numberToArray = (myInt) => {
    let myFunc = num => Number(num);
    const intArr = Array.from(String(myInt), myFunc);
    const result = `${intArr[intArr.length - 2]}${intArr[intArr.length - 1]}`;

    //return a string
    return result;
}

const generateNumbers = (day, month, year) => {
    const dayArray = (day).toString().split("");
    const monthArray = (month).toString().split("");
    const yearArray = (year).toString().split("");

    generateArrays(dayArray, monthArray, yearArray);
}

const formateNumber = (number) => {
    let tempNumber = numberToArray(number).split("");
    let result = (Number(tempNumber[0]) + Number(tempNumber[1]));

    return result <= 9 ? `0${result}` : result;
}

const generateArrays = (array1, array2, array3) => {
    outDays = [];
    inDays = [];

    array1.forEach((day, i) => {
        let tempValueA = [
            (Number(day) + Number(array2[0])) >= 10 ? formateNumber(Number(day) + Number(array2[0])) : Number(day) + Number(array2[0]),
            (Number(day) + Number(array2[1])) >= 10 ? formateNumber(Number(day) + Number(array2[1])) : Number(day) + Number(array2[1])
        ];
        let tempValueB = [
            (Number(day) + Number(array3[0])) >= 10 ? formateNumber(Number(day) + Number(array3[0])) : Number(day) + Number(array3[0]),
            (Number(day) + Number(array3[1])) >= 10 ? formateNumber(Number(day) + Number(array3[1])) : Number(day) + Number(array3[1])
        ];

        outDays.push(i <= 0 ? Number(tempValueA[0]) : Number(tempValueB[0]));
        outDays.push(i <= 0 ? Number(tempValueA[1]) : Number(tempValueB[1]));
        inDays.push(i <= 0 ? Number(tempValueB[0]) : Number(tempValueA[0]));
        inDays.push(i <= 0 ? Number(tempValueB[1]) : Number(tempValueA[1]));
    });
}
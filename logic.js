const date_input = document.getElementById('date_input').addEventListener("change", (event) => {
    const currentDate = new Date(event.target.value);
    const currentMonth = currentDate.getMonth() <= 9 ? `0${currentDate.getMonth()}` : currentDate.getMonth();
    const currentDay = currentDate.getDay()  <= 9 ? `0${currentDate.getDay()}` : currentDate.getDay();
    const currentYear = currentDate.getFullYear();
    console.log(event.target.value, currentMonth, currentYear, currentDay);
});
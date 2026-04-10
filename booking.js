document.querySelector(`form`).addEventListener(`submit`, function (event) {
    if (document.querySelector(`#Name`).value === ``) {
        event.preventDefault();
        alert(`Please fill in your name.`);
    } else if (document.querySelector(`#date`).value === ``) {
        event.preventDefault();
        alert(`
            Please select a date, we are available all days of the week.
            Opening Hours 
            Mon - Fri: 7AM - 8PM 
            Sat - Sun: 8AM - 9PM`);
    } else if (document.querySelector(`#number`).value === ``) {
        event.preventDefault();
        alert(`Please fill in your number.`);
    } else if (document.querySelector(`#car-model`).value === ``) {
        event.preventDefault();
        alert(`Please provide the car model.`);
    }
})



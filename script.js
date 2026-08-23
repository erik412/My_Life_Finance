const landingPage = document.getElementById(`landing-page`);


function currentDate(){
    today = new Date();
    return formattedDate = Intl.DateTimeFormat('en-US', {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    }).format(today);    
};

today = currentDate()
console.log(today)
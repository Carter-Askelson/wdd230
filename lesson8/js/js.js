let currentdate = new Date();


function newdate() {

    let hour = currentdate.getHours();
    var hourtext = hour;
    var timeofday = 'AM';
    if (hour > 12) {
        hourtext = hour - 12;
        timeofday = 'PM';
    }
    document.getElementById("copyright").innerHTML = currentdate.getFullYear();
    document.getElementById("lastupdate").innerHTML = document.lastModified;
}


function toggleMenu() {
    document.getElementsByClassName("nav_bar")[0].classList.toggle("responsive");
}

const day_list = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const month_list = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var new_date = new Date();
var day = new_date.getDay()
var month = new_date.getMonth()
var day = new_date.getFullYear()
var date = new_date.getDate()
var dateString = day_list[day] + ", " + date + " " + month_list[month] + " " + year;

if (day_list[day] == "Thursday") {
    document.getElementById("annoucement").innerHTML = "Friday = State mandated lockdown due to Ice Storm Issac.";
    document.getElementById("annoucement").style.display = "block";
}
else {
    document.getElementById("annoucement").style.display = "none";
}

function adjustSeverity(rating) {
    document.getElementById("ratingvalue").innerHTML = rating
}

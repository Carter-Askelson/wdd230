const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
.then(function (response) {
   return response.json();
})
.then(function (jsonObject) {
   //console.table(jsonObject);  temporary checking for valid response and data parsing
   const towns = jsonObject['towns'];
   
   for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let motto = document.createElement('h4');
        let image = document.createElement('img');
        let yearFounded = document.createElement('p');
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let details = document.createElement('div');
        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        currentPopulation.textContent = "Population: " + towns[i].currentPopulation;
        averageRainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall + " " + "inches";
        yearFounded.textContent = "Year Founded: " + towns[i].yearFounded;
        image.setAttribute('src', "/lesson9/images/" + towns[i].photo);
        image.setAttribute('alt', towns[i].name);
        details.setAttribute("id", "details");
        card.appendChild(details);
        card.appendChild(image);
        details.appendChild(name);
        details.appendChild(motto);
        details.appendChild(yearFounded);
        details.appendChild(currentPopulation);
        details.appendChild(averageRainfall);
        document.querySelector('div.cards').appendChild(card);
      }
   }
});



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


const windspeed = document.getElementById('windspeed').innerHTML;
const temp = document.getElementById('temp').innerHTML;

let windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * Math.pow(windspeed, .16));
    if (temp <= 50 && windspeed > 3) {
        windchill = Math.round(windchill);
    } else {
        windchill = "Minimal";
    }
document.getElementById('windchill').innerHTML = windchill;
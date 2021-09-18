let currentdate = Date()

function newdate() {
    let hour = currentdate.getHours();
    var hourtext = hour;
    var timeofday = "AM";
    if (hour > 12) {
        hourtext = hour - 12;
        timeofday = "PM";
    }
    document.getElementById("copyright").innerHTML = date.getFullYear();
    document.getElementById("lastupdate").innerHTML = document.lastModified;
}
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

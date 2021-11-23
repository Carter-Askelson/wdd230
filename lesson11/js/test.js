const new_day_list = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentdate = new Date();
var new_date = new Date();
var day = new_date.getDay()
var start = 0
if (day = new_day_list[0]) {
    let start = 0;
}
if (day = new_day_list[1]) {
    let start = 1;
}
if (day = new_day_list[2]) {
    let start = 2;
}
if (day = new_day_list[3]) {
    let start = 3;
}
if (day = new_day_list[4]) {
    let start = 4;
}
if (day = new_day_list[5]) {
    let start = 5;
}
if (day = new_day_list[6]) {
    let start = 6;
}

document.getElementById('day_1').innerHTML = new_day_list[start]
document.getElementById('day_2').innerHTML = new_day_list[(start + 1)]
document.getElementById('day_3').innerHTML = new_day_list[(start + 2)]
document.getElementById('day_4').innerHTML = new_day_list[(start + 3)]
document.getElementById('day_5').innerHTML = new_day_list[(start + 4)]

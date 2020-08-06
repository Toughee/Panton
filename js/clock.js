function pntClock() {
    var date = new Date();

    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var meridiem = "am";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
        meridiem = "pm";
    }

    var time = h + ":" + m + ":" + s + meridiem;
    document.getElementById("timelocl").innerText = time;
    setTimeout(pntClock, 1000)

}



pntClock();
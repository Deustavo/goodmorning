function startTime() {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    wakeupTime(today);
    let t = setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function wakeupTime(today) {
    // setando o horario que irá despertar
    let hwu = 08;
    let mwu = 00;
    document.getElementById('wake-up').innerHTML = hwu + ":" + mwu;

    // transformando o horario atual em milisegundos
    let milliseconds = Date.parse(today);

    // transformando o horario de  despertar em mili segundos
    let wakupTime = new Date();
    wakupTime = wakupTime.setHours(hwu, mwu, 0);

    let brilho = ((milliseconds - wakupTime) * - 100) / 1800000

    if (parseInt(brilho) > 90) {
        document.getElementById('background').style.filter = `brightness(0)`;
        document.getElementById('body').style.color = "white";
    } else if (parseInt(brilho) <= 90 && parseInt(brilho) > 0) {
        document.getElementById('background').style.filter = `brightness(0.${100 - parseInt(brilho)})`;
        document.getElementById('body').style.color = "#404040";
    } else {
        document.getElementById('background').style.filter = `brightness(1)`;
        document.getElementById('body').style.color = "black";
    }

}

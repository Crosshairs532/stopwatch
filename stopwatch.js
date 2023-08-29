
let intervalID; // Declare intervalID outside the functions so it's accessible to both

function start(tr) {
    let num = 0;
    if (!tr) {
        intervalID = setInterval(() => (document.getElementById('timer').innerText = `${num++}`), 1000);
    } else {
        clearInterval(intervalID);
    }
}

function stop() {
    start(true);
}
function reset() {
    document.getElementById('timer').innerText = '0';
}
const sets = 5;
const workTime = 10;
const restTime = 5;
const rest = 5;
let playing = true;
let section = "";
const sectionType = {
    none: sectionNone,
    "work time": () => {},
    "rest time": () => {},
};

function orquestrador(type) {
    sectionType[type]();
}

function cronometro(tempo) {
    let newTime = tempo;
    setInterval(() => {
        if (newTime >= 0) {
            console.log(newTime--);
        }
        if (playing && newTime < 0) {
            playing = false;
            console.log("acabou");
        }
        return;
    }, 1000);
}

function sectionNone() {
    console.log("espere");
    cronometro(5);

    return console.log("oi");
}

orquestrador("none");

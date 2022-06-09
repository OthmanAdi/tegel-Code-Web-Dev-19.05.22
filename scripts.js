function makeHexString() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function discoLight() {
    document.getElementById("discoEffect").style.backgroundColor = makeHexString();
    document.querySelector(".st").style.color = makeHexString();
    document.querySelector(".st1").style.color = makeHexString();
    document.querySelector(".st2").style.color = makeHexString();
}

const doSomethingNice = () => {
    let baseColor = "rgba(";
    for (let i = 0; i < 3; i++) {
        baseColor += Math.floor(Math.random() * 255) + ",";
    }
    return baseColor;
}

const zeichneAufKarte = () => {
    let color1 = doSomethingNice();
    let color2 = doSomethingNice();
    document.documentElement.style.setProperty("--farbe1", color1 + "1)");
    document.documentElement.style.setProperty("--farbe2", color2 + "1)");
}

setInterval(zeichneAufKarte, 1000);
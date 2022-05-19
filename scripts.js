function makeHexString() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function discoLight(){
    document.getElementById("discoEffect").style.backgroundColor = makeHexString();
    document.querySelector(".st").style.color = makeHexString();
    document.querySelector(".st1").style.color = makeHexString();
    document.querySelector(".st2").style.color = makeHexString();
}
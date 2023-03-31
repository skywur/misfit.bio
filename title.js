window.addEventListener("load", () => {
    setTimeout(function() {
        indefiniteWrite();
    }, 0);
});

if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function () {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function () {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 350);

}

var x = 0;

var titleText = ["m", "mi", "mis", "misf", "misfi", "misfit", "misfi", "misf", "mis", "mi", "m"];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++ % titleText.length];

}

// typewriter
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));

}

function indefiniteWrite() {
    let strs = [
        "Narcissist",
        "Entrepreneur",
        "Dahoodian",
        "Misfit",
    ];
    
    console.log(":3");
    
    var num = getRandomInt(strs.length);

    let quote = strs[num];

    var typElement = document.getElementById('quotes');

    var typewriter = new Typewriter(quotes, {
        loop: true
    });

    typewriter.typeString(quote).pauseFor(1000).deleteAll().pauseFor(100).callFunction(() => {
        typewriter.stop();
        indefiniteWrite();
    }).start();
}

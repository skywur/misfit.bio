function hide(){
        var video = document.getElementById("bg");
        video.play();

        // Select div element by its id attribute
        var elem = document.getElementById("loader");
        elem.className += "hide";

        var elem2 = document.getElementById("main");
        elem2.className += "main";
    }

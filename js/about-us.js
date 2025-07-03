

var who_button = document.querySelector(".who-button");
var mission_button = document.querySelector(".mission-button");
var vision_button = document.querySelector(".vision-button");

var who_text = document.querySelector(".who-p");
var mission_text = document.querySelector(".mission-p");
var vision_text = document.querySelector(".vision-p");


who_button.click();
who_button.addEventListener('click' , showWhoVal);
mission_button.addEventListener('click' , showMissionVal);
vision_button.addEventListener('click' , showVisionVal);

who_button.style.backgroundColor="#112622";
who_button.style.color = "#ead8c3";
who_text.style.visibility = "visible";
mission_text.style.visibility = "hidden";
vision_text.style.visibility = "hidden";

function showWhoVal(){
    who_button.style.backgroundColor="#112622";
    who_button.style.color = "#ead8c3";

    mission_button.style.backgroundColor="#F2E9DC";
    mission_button.style.color = "#112622";

    vision_button.style.backgroundColor="#F2E9DC";
    vision_button.style.color = "#112622";

    who_text.style.visibility = "visible";
    mission_text.style.visibility = "hidden";
    vision_text.style.visibility = "hidden";
}

function showMissionVal(){
    mission_button.style.backgroundColor="#112622";
    mission_button.style.color = "#ead8c3";

    who_button.style.backgroundColor="#F2E9DC";
    who_button.style.color = "#112622";

    vision_button.style.backgroundColor="#F2E9DC";
    vision_button.style.color = "#112622";

    mission_text.style.visibility = "visible";
    who_text.style.visibility = "hidden";
    vision_text.style.visibility = "hidden";
}

function showVisionVal(){
    vision_button.style.backgroundColor="#112622";
    vision_button.style.color = "#ead8c3";

    mission_button.style.backgroundColor="#F2E9DC";
    mission_button.style.color = "#112622";

    who_button.style.backgroundColor="#F2E9DC";
    who_button.style.color = "#112622";
    
    vision_text.style.visibility = "visible";
    who_text.style.visibility = "hidden";
    mission_text.style.visibility = "hidden";
}


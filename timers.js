console.clear();
//some jquery for you - you can ignore for now. This will trigger your button clicks
$( "#reset" ).click(Reset);
$( "#start" ).click(Start);
$( "#pause" ).click(Pause);

// Call this function to update the text display
var seconds;
var timerId;

function UpdateText() {
    seconds++;
    $( "#timeDisplay" ).text("Time elapsed: " + seconds);
}

// YOUR CODE GOES HERE
function Reset() {
    console.log("Reset Clicked");
    clearInterval(timerId);
    seconds = -1;
    UpdateText();
}

function Start() {
    console.log("Start Clicked");
    timerId = setInterval(UpdateText, 1000);
}

function Pause() {
    console.log("Pause Clicked");
    clearInterval(timerId);
}
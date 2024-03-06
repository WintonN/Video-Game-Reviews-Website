// Section to handle the pop-ups on the "Game Reviews" Page and "Upcoming Reviews" if javascript is available
document.addEventListener("readystatechange", function(event) {
	if(event.target.readyState == "interactive") {
		document.querySelector("body").classList.add("js");

        // Handles the popup for Elden Ring
        let eldenRingButtons = document.querySelectorAll("#EldenRing .open-ratings a", "#elden-ring-popup .close-ratings a");
        for(let button of eldenRingButtons) {
            button.addEventListener("click", function(event) {
                event.preventDefault();
                document.body.classList.toggle("show-elden-ring-popup");
            });
        }

        // Handles the popup for Sekiro
        let sekiroButtons = document.querySelectorAll("#sekiro .open-ratings a", "#sekiro-popup .close-ratings a");
        for(let button of sekiroButtons) {
            button.addEventListener("click", function(event) {
                event.preventDefault();
                document.body.classList.toggle("show-sekiro-popup");
            });
        }

        // Handles the popup for Hogwarts Legacy
        let hogwartsButtons = document.querySelectorAll("#hogwarts .open-ratings a", "#hogwarts-popup .close-ratings a");
        for(let button of hogwartsButtons) {
            button.addEventListener("click", function(event) {
                event.preventDefault();
                document.body.classList.toggle("show-hogwarts-popup");
            });
        }

        // Handles the popup for Jedi: Fallen Order
        let fallenOrderButtons = document.querySelectorAll("#fallenOrder .open-ratings a", "#fallenOrder-popup .close-ratings a");
        for(let button of fallenOrderButtons) {
            button.addEventListener("click", function(event) {
                event.preventDefault();
                document.body.classList.toggle("show-fallenOrder-popup");
            });
        }

        // Handles the popup for the countdowns on the "Upcoming Reviews"
        let featuresExpandButtons = document.querySelectorAll(".game .expand-button a");
        for(let button of featuresExpandButtons) {
            button.addEventListener("click", function(event) {
                event.preventDefault();
                this.parentElement.parentElement.classList.add("expanded");
            });
        }
	}
});

// Creates an alert if the game review is not available from the home page
function unavailable() {
    alert("Sorry! \nThis review is not currently available! \nPlease check the Upcoming Reviews Section for more information!")
};

// Function to enable users to search for a specific game review
function search() {
    // List of game reviews available
    const games = ["Elden-Ring", "Sekiro-Shadows-Die-Twice", "Hogwarts-Legacy", "Star-Wars-Jedi-Fallen-Order"];
    // Create a prompt with instructions for the user that is searching
    var fileName = prompt("Please enter the game you wish to search for. \nPlease capitalise the first letter of each word and replace any spaces or symbols for a dash.\n"  
                        + "For example, to search for Sekiro: Shadows Die Twice, you would search Sekiro-Shadows-Die-Twice.");
    // Check if the review for the game exists
    // If the review exists, take the user to the game's review page
    // If the review does not exist, create an alert informing the user
    if (games.includes(fileName)) {
        fileName = "./" + fileName + ".html";
        window.location.assign(fileName);
    } else {
        alert("Sorry! The game review you have searched for does not exist!");
    }
}

// Set the dates for when the various upcoming game reviews will be available
var survivorCountDownDate = new Date("May 08, 2023 23:59:59").getTime();
var terrariaCountDownDate = new Date("May 29, 2023 23:59:59").getTime();
var gtavCountDownDate = new Date("Jun 5, 2023 23:59:59").getTime();
var marioCountDownDate = new Date("Jun 12, 2023 23:59:59").getTime();
var zeldaCountDownDate = new Date("Jun 19, 2023 23:59:59").getTime();
var witcherCountDownDate = new Date("Jun 26, 2023 23:59:59").getTime();
var stanleyCountDownDate = new Date("Jul 3, 2023 23:59:59").getTime();
var stardewCountDownDate = new Date("Jul 10, 2023 23:59:59").getTime();
var minecraftCountDownDate = new Date("Jul 17, 2023 23:59:59").getTime();
var portal2CountDownDate = new Date("Jul 24, 2023 23:59:59").getTime();

// Update the countdown for each of the upcoming games every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Get the time from now until each game review will be released
  var survivorDistance = survivorCountDownDate - now;
  var terrariaDistance = terrariaCountDownDate - now;
  var gtavDistance = gtavCountDownDate - now;
  var marioDistance = marioCountDownDate - now;
  var zeldaDistance = zeldaCountDownDate - now;
  var witcherDistance = witcherCountDownDate - now;
  var stanleyDistance = stanleyCountDownDate - now;
  var stardewDistance = stardewCountDownDate - now;
  var minecraftDistance = minecraftCountDownDate - now;
  var portal2Distance = portal2CountDownDate - now;

  // Create a message with the countdown displaying when the game review will be available
  timerDialogue("survivor-timer", survivorDistance);
  timerDialogue("terraria-timer", terrariaDistance);
  timerDialogue("gtav-timer", gtavDistance);
  timerDialogue("mario-timer", marioDistance);
  timerDialogue("zelda-timer", zeldaDistance);
  timerDialogue("witcher-timer", witcherDistance);
  timerDialogue("stanley-timer", stanleyDistance);
  timerDialogue("stardew-timer", stardewDistance);
  timerDialogue("minecraft-timer", minecraftDistance);
  timerDialogue("portal2-timer", portal2Distance);
}, 1000);

// Get the number of days from the time given
function days(distance) {
  return Math.floor(distance / (1000 * 60 * 60 * 24));
}

// Get the number of hours from the time given
function hours(distance) {
  return Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
}

// Get the number of minutes from the time given
function minutes(distance) {
  return Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
}

// Get the number of seconds from the time given
function seconds(distance) {
  return Math.floor((distance % (1000 * 60)) / 1000);
}

// Format the countdown to display the days, hours, minutes, and seconds until the review is released
// If the review should have been released, display "NOW"
function timerDialogue(id, distance) {
  document.getElementById(id).innerHTML = days(distance) + " days, " + hours(distance) + " hours, "
  + minutes(distance)+ " minutes, and " + seconds(distance) + " seconds.";

  if (distance < 0) {
    document.getElementById(id).innerHTML = "NOW";
  }
}
/* =========================
   MOBILE MENU
========================= */

let menuIcon = document.getElementById("menu-icon");
let navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", function() {

    navbar.classList.toggle("active");

    if (navbar.classList.contains("active")) {

        menuIcon.classList.remove("bx-menu");
        menuIcon.classList.add("bx-x");

    } else {

        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");

    }

});


/* =========================
   CLOSE MENU
========================= */

let navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");

        menuIcon.classList.remove("bx-x");
        menuIcon.classList.add("bx-menu");

    });

});
/* =========================
   SEARCH DESTINATION
========================= */

function searchDestination() {

    let input =
        document.getElementById("destinationSearch").value;

    input = input.trim().toLowerCase();


    if (input === "") {

        alert("Please enter a destination.");

        return;
    }


    let place =
        document.getElementById(input);


    if (place) {

        place.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    } else {

        alert("Destination not found. Please enter a valid destination.");

    }

}
/* =========================
   REGION DESTINATIONS
========================= */

function filterRegion(region) {

    let grid = document.getElementById("regionDestinationGrid");
    let results = document.getElementById("regionResults");
    let title = document.getElementById("regionTitle");
    let description = document.getElementById("regionDescription");

    grid.innerHTML = "";

    if (region === "North") {

        title.innerText = "North India";

        description.innerText =
            "Discover mountains, forts, royal cities and spiritual escapes.";

        grid.innerHTML = `
        
            <div class="destination-card">
                <img src="img/kashmir.jpeg" alt="Kashmir">
                <h3>Kashmir</h3>
                <p>Snow-covered mountains, peaceful lakes and beautiful valleys.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/manali.jpeg" alt="Manali">
                <h3>Manali</h3>
                <p>A Himalayan getaway surrounded by mountains and rivers.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/shimla.jpeg" alt="Shimla">
                <h3>Shimla</h3>
                <p>A charming hill station with beautiful Himalayan views.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/jaipur.jpeg" alt="Jaipur">
                <h3>Jaipur</h3>
                <p>The Pink City filled with palaces, forts and colourful markets.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/rishikesh.jpeg" alt="Rishikesh">
                <h3>Rishikesh</h3>
                <p>A riverside destination combining spirituality and adventure.</p>
                <button>Plan Trip</button>
            </div>
        
        `;
    }

    else if (region === "South") {

        title.innerText = "South India";

        description.innerText =
            "Explore misty hills, tropical beaches and ancient temples.";

        grid.innerHTML = `

            <div class="destination-card">
                <img src="img/ooty.jpeg" alt="Ooty">
                <h3>Ooty</h3>
                <p>A peaceful hill station famous for tea gardens and misty landscapes.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/munnar.jpeg" alt="Munnar">
                <h3>Munnar</h3>
                <p>A beautiful hill destination covered with tea plantations.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/coorg.jpeg" alt="Coorg">
                <h3>Coorg</h3>
                <p>A green escape known for coffee plantations and waterfalls.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/hampi.jpeg" alt="Hampi">
                <h3>Hampi</h3>
                <p>An historic landscape filled with ancient ruins and temples.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/varkala.jpeg" alt="Varkala">
                <h3>Varkala</h3>
                <p>A coastal destination known for dramatic cliffs and beaches.</p>
                <button>Plan Trip</button>
            </div>

        `;
    }

    else if (region === "East") {

        title.innerText = "East India";

        description.innerText =
            "Experience Himalayan towns, historic cities and unique wildlife.";

        grid.innerHTML = `

            <div class="destination-card">
                <img src="img/darjeeling.jpeg" alt="Darjeeling">
                <h3>Darjeeling</h3>
                <p>A Himalayan hill town famous for tea gardens and mountain views.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/kolkata.jpeg" alt="Kolkata">
                <h3>Kolkata</h3>
                <p>A cultural city known for art, literature and food.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/puri.jpeg" alt="Puri">
                <h3>Puri</h3>
                <p>A coastal destination combining beaches, culture and spirituality.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/bhubaneswar.jpeg" alt="Bhubaneswar">
                <h3>Bhubaneswar</h3>
                <p>A historic city known for ancient temples and architecture.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/sundarbans.jpeg" alt="Sundarbans">
                <h3>Sundarbans</h3>
                <p>A vast mangrove ecosystem known for unique wildlife.</p>
                <button>Plan Trip</button>
            </div>

        `;
    }

    else if (region === "West") {

        title.innerText = "West India";

        description.innerText =
            "Discover beaches, deserts, royal cities and vibrant urban life.";

        grid.innerHTML = `

            <div class="destination-card">
                <img src="img/goa.jpeg" alt="Goa">
                <h3>Goa</h3>
                <p>A coastal destination famous for beaches and Portuguese heritage.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/udaipur.jpeg" alt="Udaipur">
                <h3>Udaipur</h3>
                <p>The City of Lakes known for elegant palaces and lake views.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/jodhpur.jpeg" alt="Jodhpur">
                <h3>Jodhpur</h3>
                <p>The Blue City dominated by the magnificent Mehrangarh Fort.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/rann-of-kutch.jpeg" alt="Rann of Kutch">
                <h3>Rann of Kutch</h3>
                <p>A vast white salt desert with a unique landscape.</p>
                <button>Plan Trip</button>
            </div>

            <div class="destination-card">
                <img src="img/mumbai.jpeg" alt="Mumbai">
                <h3>Mumbai</h3>
                <p>India's energetic coastal city combining heritage and modern life.</p>
                <button>Plan Trip</button>
            </div>

        `;
    }

    results.classList.add("show");

    results.scrollIntoView({
        behavior: "smooth"
    });

}
/* =========================
   SCROLL REVEAL
========================= */

document.addEventListener("DOMContentLoaded", function() {

    const sr = ScrollReveal({

        distance: "20px",

        duration: 1000,

        delay: 150,

        opacity: 0,

        reset: false,

        easing: "ease-out"

    });


    sr.reveal(".hero-content", {
        origin: "bottom"
    });


    sr.reveal(".section-heading", {
        origin: "bottom"
    });


    sr.reveal(".destination-card", {
        origin: "bottom",
        interval: 100
    });


    sr.reveal(".region-card", {
        origin: "bottom",
        interval: 100
    });


    sr.reveal(".planner-content", {
        origin: "left"
    });


    sr.reveal(".planner-card", {
        origin: "right"
    });


    sr.reveal(".tip-card", {
        origin: "bottom",
        interval: 100
    });


    sr.reveal(".about-image", {
        origin: "left"
    });


    sr.reveal(".about-content", {
        origin: "right"
    });


    sr.reveal(".review-card", {
        origin: "bottom",
        interval: 100
    });


    sr.reveal(".footer", {
        origin: "bottom"
    });

});

/* =========================
   SMOOTH SCROLL
========================= */

let links = document.querySelectorAll('a[href^="#"]');

links.forEach(function(link) {

    link.addEventListener("click", function(event) {

        let target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   PLANNER FORM
========================= */

let plannerForm = document.getElementById("plannerForm");

if (plannerForm) {

    plannerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Your trip plan has been created!");

    });

}


/* =========================
   SIGN IN / SIGN UP
========================= */

let signIn = document.querySelector(".sign-in");
let signUp = document.querySelector(".sign-up");


if (signIn) {

    signIn.addEventListener("click", function() {

        alert("Sign In");

    });

}


if (signUp) {

    signUp.addEventListener("click", function() {

        alert("Sign Up");

    });

}
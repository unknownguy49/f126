/* =====================================================
   F1 2026 RACE DATA
===================================================== */

const races = [

    /* =================================================
       COMPLETED RACES
    ================================================= */

    {
        round: 1,

        name: "Australian Grand Prix",

        shortName: "Australia",

        date: "08 Mar",

        location: "Albert Park Grand Prix Circuit",

        image: "images/australia.avif",

        status: "COMPLETED",

        totalLaps: 58,

        podium: [

            {
                position: 1,
                number: 63,
                driver: "George Russell",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 2,
                number: 12,
                driver: "Kimi Antonelli",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 3,
                number: 16,
                driver: "Charles Leclerc",
                team: "Ferrari",
                class: "ferrari"
            }

        ],

        fastestLap: {

            driver: "Max Verstappen",

            number: 3,

            team: "Red Bull Racing",

            lap: 43,

            time: "1:22.091"

        }

    },


    {
        round: 2,

        name: "Chinese Grand Prix",

        shortName: "China",

        date: "15 Mar",

        location: "Shanghai International Circuit",

        image: "images/china.avif",

        status: "COMPLETED",

        totalLaps: 56,

        podium: [

            {
                position: 1,
                number: 12,
                driver: "Kimi Antonelli",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 2,
                number: 63,
                driver: "George Russell",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 3,
                number: 44,
                driver: "Lewis Hamilton",
                team: "Ferrari",
                class: "ferrari"
            }

        ],

        fastestLap: {

            driver: "Kimi Antonelli",

            number: 12,

            team: "Mercedes",

            lap: 52,

            time: "1:35.275"

        }

    },


    {
        round: 3,

        name: "Japanese Grand Prix",

        shortName: "Japan",

        date: "29 Mar",

        location: "Suzuka International Racing Course",

        image: "images/japan.avif",

        status: "COMPLETED",

        totalLaps: 53,

        podium: [

            {
                position: 1,
                number: 12,
                driver: "Kimi Antonelli",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 2,
                number: 81,
                driver: "Oscar Piastri",
                team: "McLaren",
                class: "mclaren"
            },

            {
                position: 3,
                number: 16,
                driver: "Charles Leclerc",
                team: "Ferrari",
                class: "ferrari"
            }

        ],

        fastestLap: {

            driver: "Kimi Antonelli",

            number: 12,

            team: "Mercedes",

            lap: 49,

            time: "1:32.432"

        }

    },


    {
        round: 4,

        name: "Miami Grand Prix",

        shortName: "Miami",

        date: "03 May",

        location: "Miami International Autodrome",

        image: "images/miami.avif",

        status: "COMPLETED",

        totalLaps: 57,

        podium: [

            {
                position: 1,
                number: 12,
                driver: "Kimi Antonelli",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 2,
                number: 1,
                driver: "Lando Norris",
                team: "McLaren",
                class: "mclaren"
            },

            {
                position: 3,
                number: 81,
                driver: "Oscar Piastri",
                team: "McLaren",
                class: "mclaren"
            }

        ],

        fastestLap: {

            driver: "Lando Norris",

            number: 1,

            team: "McLaren",

            lap: 35,

            time: "1:31.869"

        }

    },


    {
        round: 5,

        name: "Canadian Grand Prix",

        shortName: "Canada",

        date: "24 May",

        location: "Circuit Gilles-Villeneuve",

        image: "images/canada.avif",

        status: "COMPLETED",

        totalLaps: 68,

        podium: [

            {
                position: 1,
                number: 12,
                driver: "Kimi Antonelli",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 2,
                number: 44,
                driver: "Lewis Hamilton",
                team: "Ferrari",
                class: "ferrari"
            },

            {
                position: 3,
                number: 3,
                driver: "Max Verstappen",
                team: "Red Bull Racing",
                class: "redbull"
            }

        ],

        fastestLap: {

            driver: "Kimi Antonelli",

            number: 12,

            team: "Mercedes",

            lap: 68,

            time: "1:14.210"

        }

    },


    {
        round: 6,

        name: "Monaco Grand Prix",

        shortName: "Monaco",

        date: "07 Jun",

        location: "Circuit de Monaco",

        image: "images/monaco.avif",

        status: "COMPLETED",

        totalLaps: 78,

        podium: [

            {
                position: 1,
                number: 12,
                driver: "Kimi Antonelli",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 2,
                number: 44,
                driver: "Lewis Hamilton",
                team: "Ferrari",
                class: "ferrari"
            },

            {
                position: 3,
                number: 6,
                driver: "Isack Hadjar",
                team: "Red Bull Racing",
                class: "redbull"
            }

        ],

        fastestLap: {

            driver: "Kimi Antonelli",

            number: 12,

            team: "Mercedes",

            lap: 76,

            time: "1:13.481"

        }

    },


    {
        round: 7,

        name: "Barcelona-Catalunya Grand Prix",

        shortName: "Barcelona",

        date: "14 Jun",

        location: "Circuit de Barcelona-Catalunya",

        image: "images/barcelona-catalunya.avif",

        status: "COMPLETED",

        totalLaps: 66,

        podium: [

            {
                position: 1,
                number: 44,
                driver: "Lewis Hamilton",
                team: "Ferrari",
                class: "ferrari"
            },

            {
                position: 2,
                number: 63,
                driver: "George Russell",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 3,
                number: 1,
                driver: "Lando Norris",
                team: "McLaren",
                class: "mclaren"
            }

        ],

        fastestLap: {

            driver: "Lewis Hamilton",

            number: 44,

            team: "Ferrari",

            lap: 44,

            time: "1:20.122"

        }

    },


    {
        round: 8,

        name: "Austrian Grand Prix",

        shortName: "Austria",

        date: "28 Jun",

        location: "Red Bull Ring",

        image: "images/austria.avif",

        status: "COMPLETED",

        totalLaps: 71,

        podium: [

            {
                position: 1,
                number: 63,
                driver: "George Russell",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 2,
                number: 3,
                driver: "Max Verstappen",
                team: "Red Bull Racing",
                class: "redbull"
            },

            {
                position: 3,
                number: 12,
                driver: "Kimi Antonelli",
                team: "Mercedes",
                class: "mercedes"
            }

        ],

        fastestLap: {

            driver: "Kimi Antonelli",

            number: 12,

            team: "Mercedes",

            lap: 59,

            time: "1:10.374"

        }

    },


    {
        round: 9,

        name: "British Grand Prix",

        shortName: "Great Britain",

        date: "05 Jul",

        location: "Silverstone Circuit",

        image: "images/great-britain.avif",

        status: "COMPLETED",

        totalLaps: 52,

        podium: [

            {
                position: 1,
                number: 16,
                driver: "Charles Leclerc",
                team: "Ferrari",
                class: "ferrari"
            },

            {
                position: 2,
                number: 63,
                driver: "George Russell",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 3,
                number: 44,
                driver: "Lewis Hamilton",
                team: "Ferrari",
                class: "ferrari"
            }

        ],

        fastestLap: {

            driver: "Kimi Antonelli",

            number: 12,

            team: "Mercedes",

            lap: 37,

            time: "1:31.777"

        }

    },


    {
        round: 10,

        name: "Belgian Grand Prix",

        shortName: "Belgium",

        date: "19 Jul",

        location: "Circuit de Spa-Francorchamps",

        image: "images/belgium.avif",

        status: "COMPLETED",

        totalLaps: 44,

        podium: [

            {
                position: 1,
                number: 12,
                driver: "Kimi Antonelli",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 2,
                number: 16,
                driver: "Charles Leclerc",
                team: "Ferrari",
                class: "ferrari"
            },

            {
                position: 3,
                number: 3,
                driver: "Max Verstappen",
                team: "Red Bull Racing",
                class: "redbull"
            }

        ],

        fastestLap: {

            driver: "Lando Norris",

            number: 1,

            team: "McLaren",

            lap: 44,

            time: "1:48.890"

        }

    },


    {
        round: 11,

        name: "Hungarian Grand Prix",

        shortName: "Hungary",

        date: "26 Jul",

        location: "Hungaroring",

        image: "images/hungary.avif",

        status: "COMPLETED",

        totalLaps: 70,

        podium: [

            {
                position: 1,
                number: 1,
                driver: "Lando Norris",
                team: "McLaren",
                class: "mclaren"
            },

            {
                position: 2,
                number: 3,
                driver: "Max Verstappen",
                team: "Red Bull Racing",
                class: "redbull"
            },

            {
                position: 3,
                number: 12,
                driver: "Kimi Antonelli",
                team: "Mercedes",
                class: "mercedes"
            }

        ],

        fastestLap: {

            driver: "Charles Leclerc",

            number: 16,

            team: "Ferrari",

            lap: 58,

            time: "1:22.000"

        }

    },


    {
        round: 12,

        name: "Dutch Grand Prix",

        shortName: "Netherlands",

        date: "23 Aug",

        location: "Circuit Zandvoort",

        image: "images/netherlands.avif",

        status: "COMPLETED",

        totalLaps: 72,

        podium: [

            {
                position: 1,
                number: 1,
                driver: "Lando Norris",
                team: "McLaren",
                class: "mclaren"
            },

            {
                position: 2,
                number: 12,
                driver: "Kimi Antonelli",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 3,
                number: 63,
                driver: "George Russell",
                team: "Mercedes",
                class: "mercedes"
            }

        ],

        fastestLap: {

            driver: "Charles Leclerc",

            number: 16,

            team: "Ferrari",

            lap: 60,

            time: "1:14.230"

        }

    },


    {
        round: 13,

        name: "Italian Grand Prix",

        shortName: "Italy",

        date: "06 Sep",

        location: "Autodromo Nazionale Monza",

        image: "images/italy.avif",

        status: "COMPLETED",

        totalLaps: 53,

        podium: [

            {
                position: 1,
                number: 12,
                driver: "Kimi Antonelli",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 2,
                number: 63,
                driver: "George Russell",
                team: "Mercedes",
                class: "mercedes"
            },

            {
                position: 3,
                number: 3,
                driver: "Max Verstappen",
                team: "Red Bull Racing",
                class: "redbull"
            }

        ],

        fastestLap: {

            driver: "Kimi Antonelli",

            number: 12,

            team: "Mercedes",

            lap: 53,

            time: "1:23.504"

        }

    },


    /* =================================================
       FUTURE RACES
    ================================================= */

    {
        round: 14,

        name: "Spanish Grand Prix",

        shortName: "Spain",

        date: "11 - 13 Sep",

        location: "Madring, Madrid",

        image: "images/spain.avif",

        status: "UPCOMING",

        totalLaps: null,

        podium: null,

        fastestLap: null

    },


    {
        round: 15,

        name: "Azerbaijan Grand Prix",

        shortName: "Azerbaijan",

        date: "24 - 26 Sep",

        location: "Baku City Circuit",

        image: "images/azerbaijan.avif",

        status: "UPCOMING",

        totalLaps: null,

        podium: null,

        fastestLap: null

    },


    {
        round: 16,

        name: "Bahrain Grand Prix",

        shortName: "Bahrain",

        date: "02 - 04 Oct",

        location: "Bahrain International Circuit",

        image: "images/bahrain.avif",

        status: "UPCOMING",

        totalLaps: null,

        podium: null,

        fastestLap: null

    },


    {
        round: 17,

        name: "Singapore Grand Prix",

        shortName: "Singapore",

        date: "09 - 11 Oct",

        location: "Marina Bay Street Circuit",

        image: "images/singapore.avif",

        status: "UPCOMING",

        totalLaps: null,

        podium: null,

        fastestLap: null

    },


    {
        round: 18,

        name: "United States Grand Prix",

        shortName: "United States",

        date: "23 - 25 Oct",

        location: "Circuit of the Americas",

        image: "images/usa.avif",

        status: "UPCOMING",

        totalLaps: null,

        podium: null,

        fastestLap: null

    },


    {
        round: 19,

        name: "Mexico City Grand Prix",

        shortName: "Mexico",

        date: "30 Oct - 01 Nov",

        location:
            "Autódromo Hermanos Rodríguez",

        image: "images/mexico.avif",

        status: "UPCOMING",

        totalLaps: null,

        podium: null,

        fastestLap: null

    },


    {
        round: 20,

        name: "São Paulo Grand Prix",

        shortName: "Brazil",

        date: "06 - 08 Nov",

        location: "Interlagos Circuit",

        image: "images/brazil.avif",

        status: "UPCOMING",

        totalLaps: null,

        podium: null,

        fastestLap: null

    },


    {
        round: 21,

        name: "Las Vegas Grand Prix",

        shortName: "Las Vegas",

        date: "19 - 21 Nov",

        location: "Las Vegas Strip Circuit",

        image: "images/las-vegas.avif",

        status: "UPCOMING",

        totalLaps: null,

        podium: null,

        fastestLap: null

    },


    {
        round: 22,

        name: "Qatar Grand Prix",

        shortName: "Qatar",

        date: "27 - 29 Nov",

        location:
            "Lusail International Circuit",

        image: "images/qatar.avif",

        status: "UPCOMING",

        totalLaps: null,

        podium: null,

        fastestLap: null

    },


    {
        round: 23,

        name: "Abu Dhabi Grand Prix",

        shortName: "Abu Dhabi",

        date: "04 - 06 Dec",

        location: "Yas Marina Circuit",

        image: "images/abu-dhabi.avif",

        status: "UPCOMING",

        totalLaps: null,

        podium: null,

        fastestLap: null

    }

];


/* =====================================================
   DOM ELEMENTS
===================================================== */

const raceTrack =
    document.getElementById("raceTrack");

const scrollLeftButton =
    document.getElementById("scrollLeft");

const scrollRightButton =
    document.getElementById("scrollRight");

const emptyState =
    document.getElementById("emptyState");

const raceView =
    document.getElementById("raceView");

const trackName =
    document.getElementById("trackName");

const trackLocation =
    document.getElementById("trackLocation");

const trackImage =
    document.getElementById("trackImage");

const trackShortName =
    document.getElementById("trackShortName");

const roundNumber =
    document.getElementById("roundNumber");

const raceDate =
    document.getElementById("raceDate");

const raceStatus =
    document.getElementById("raceStatus");

const raceStatusLabel =
    document.getElementById(
        "raceStatusLabel"
    );

const podium =
    document.getElementById("podium");

const fastestLapCard =
    document.getElementById(
        "fastestLapCard"
    );


/* =====================================================
   DRIVER IMAGES
===================================================== */

const driverImages = {

    "George Russell":
        "images/drivers/george-russell.png",

    "Kimi Antonelli":
        "images/drivers/kimi-antonelli.png",

    "Charles Leclerc":
        "images/drivers/charles-leclerc.png",

    "Lewis Hamilton":
        "images/drivers/lewis-hamilton.png",

    "Max Verstappen":
        "images/drivers/max-verstappen.png",

    "Lando Norris":
        "images/drivers/lando-norris.png",

    "Oscar Piastri":
        "images/drivers/oscar-piastri.png",

    "Isack Hadjar":
        "images/drivers/isack-hadjar.png"

};


/* =====================================================
   BUILD CALENDAR
===================================================== */

function buildRaceSelector() {

    races.forEach(
        (race, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.type = "button";


            button.className =
                "race-button";


            if (
                race.status ===
                "UPCOMING"
            ) {

                button.classList.add(
                    "upcoming"
                );

            } else {

                button.classList.add(
                    "completed"
                );

            }


            button.dataset.index =
                index;


            button.innerHTML = `

                <span class="race-number">
                    ${String(race.round)
                        .padStart(2, "0")}
                </span>

                <span class="race-name">
                    ${race.shortName}
                </span>

                <span class="race-state"></span>

            `;


            button.addEventListener(
                "click",
                () => selectRace(index)
            );


            raceTrack.appendChild(
                button
            );

        }
    );

}


/* =====================================================
   SELECT RACE
===================================================== */

function selectRace(index) {

    const race =
        races[index];


    if (!race) {

        return;

    }


    /* ---------------------------------------------
       Active race
    --------------------------------------------- */

    document
        .querySelectorAll(
            ".race-button"
        )
        .forEach(
            button => {

                button.classList.remove(
                    "active"
                );

            }
        );


    const selectedButton =
        document.querySelector(
            `.race-button[data-index="${index}"]`
        );


    if (selectedButton) {

        selectedButton.classList.add(
            "active"
        );


        selectedButton.scrollIntoView({

            behavior: "smooth",

            block: "nearest",

            inline: "center"

        });

    }


    /* ---------------------------------------------
       Remove initial screen
    --------------------------------------------- */

    emptyState.hidden = true;

    raceView.hidden = false;


    /* ---------------------------------------------
       Hero
    --------------------------------------------- */

    trackName.textContent =
        race.name;


    trackLocation.textContent =
        race.location;


    trackShortName.textContent =
        race.shortName.toUpperCase();


    roundNumber.textContent =
        race.round;


    raceDate.textContent =
        race.date;


    raceStatus.textContent =
        race.status;


    raceStatusLabel.textContent =
        race.status;


    raceStatus.classList.toggle(

        "upcoming-status",

        race.status === "UPCOMING"

    );


    /* ---------------------------------------------
       Track image
    --------------------------------------------- */

    trackImage.style.opacity = "0";


    trackImage.onload =
        () => {

            trackImage.style.opacity =
                "1";

        };


    trackImage.src =
        race.image;


    trackImage.alt =
        `${race.name} circuit`;


    /* ---------------------------------------------
       Podium
    --------------------------------------------- */

    renderPodium(race);


    /* ---------------------------------------------
       Fastest lap
    --------------------------------------------- */

    renderFastestLap(race);


    /* ---------------------------------------------
       Return to selected race
       when necessary
    --------------------------------------------- */

    if (

        window.scrollY >

        document
            .querySelector(
                ".race-navigation"
            )
            .offsetHeight +

        100

    ) {

        raceView.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }

}


/* =====================================================
   RENDER PODIUM
===================================================== */

function renderPodium(race) {


    /* ---------------------------------------------
       Future race
    --------------------------------------------- */

    if (!race.podium) {

        podium.innerHTML = `

            ${createEmptyPodiumCard(
                2,
                "second"
            )}

            ${createEmptyPodiumCard(
                1,
                "first"
            )}

            ${createEmptyPodiumCard(
                3,
                "third"
            )}

        `;

        return;

    }


    /* ---------------------------------------------
       Completed race
    --------------------------------------------- */

    const first =
        race.podium.find(
            driver =>
                driver.position === 1
        );


    const second =
        race.podium.find(
            driver =>
                driver.position === 2
        );


    const third =
        race.podium.find(
            driver =>
                driver.position === 3
        );


    /*
       Visual order:

       2nd
       1st
       3rd
    */

    podium.innerHTML = `

        ${createPodiumCard(second)}

        ${createPodiumCard(first)}

        ${createPodiumCard(third)}

    `;

}


/* =====================================================
   CREATE PODIUM CARD
===================================================== */

function createPodiumCard(driver) {

    const driverImage =
        driverImages[
            driver.driver
        ];


    return `

        <div class="
            podium-card
            ${driver.position === 1
                ? "first"
                : ""}
        ">


            ${
                driverImage
                    ? `
                        <img
                            class="driver-image"
                            src="${driverImage}"
                            alt="${driver.driver}"
                            loading="lazy"
                            draggable="false"
                        >

                        <div
                            class="driver-image-fade"
                        ></div>
                    `
                    : ""
            }


            <div class="position">
                ${driver.position}
            </div>


            <div class="driver-info">

                <span class="driver-number">
                    #${driver.number}
                </span>


                <h3>
                    ${driver.driver}
                </h3>


                <p>
                    ${driver.team}
                </p>

            </div>


            <div class="
                team-color
                ${driver.class}
            "></div>


        </div>

    `;

}


/* =====================================================
   EMPTY PODIUM CARD
===================================================== */

function createEmptyPodiumCard(
    position,
    extraClass
) {

    return `

        <div class="
            podium-card
            ${extraClass}
            upcoming-card
        ">


            <div class="position">
                ${position}
            </div>


            <div class="driver-info">

                <span class="driver-number">
                    —
                </span>


                <h3
                    class="upcoming-driver"
                >
                    —
                </h3>


                <p>
                    —
                </p>

            </div>


            <div class="team-color"></div>


        </div>

    `;

}


/* =====================================================
   FASTEST LAP
===================================================== */

function renderFastestLap(race) {

    /* ---------------------------------------------
       Future race
    --------------------------------------------- */

    if (!race.fastestLap) {

        fastestLapCard.classList.add("empty");

        fastestLapCard.innerHTML = `

            <div class="fastest-lap-main">

                <span class="fastest-lap-label">
                    FASTEST LAP
                </span>

                <div class="fastest-lap-time">
                    —
                </div>

                <div class="fastest-lap-driver">
                    —
                </div>

                <div class="fastest-lap-team">
                    —
                </div>

            </div>


            <div class="fastest-lap-visual">

                <div class="fastest-lap-visual-placeholder">
                    —
                </div>

                <div class="fastest-lap-stats">

                    <div>
                        <span>LAP</span>
                        <strong>—</strong>
                    </div>

                    <div>
                        <span>TOTAL LAPS</span>
                        <strong>—</strong>
                    </div>

                </div>

            </div>

        `;

        return;

    }


    /* ---------------------------------------------
       Completed race
    --------------------------------------------- */

    fastestLapCard.classList.remove("empty");

    const lap = race.fastestLap;

    const driverImage =
        driverImages[lap.driver];


    fastestLapCard.innerHTML = `

        <div class="fastest-lap-main">

            <span class="fastest-lap-label">
                FASTEST LAP
            </span>

            <div class="fastest-lap-time">
                ${lap.time}
            </div>

            <div class="fastest-lap-driver">
                ${lap.driver}
            </div>

            <div class="fastest-lap-team">
                ${lap.team}
            </div>

        </div>


        <div class="fastest-lap-visual">

            ${driverImage ? `
                <img
                    class="fastest-lap-driver-image"
                    src="${driverImage}"
                    alt="${lap.driver}"
                    loading="lazy"
                    draggable="false"
                >
                <div class="fastest-lap-image-fade"></div>
            ` : ""}


            <div class="fastest-lap-stats">

                <div>
                    <span>LAP</span>
                    <strong>${lap.lap}</strong>
                </div>

                <div>
                    <span>TOTAL LAPS</span>
                    <strong>${race.totalLaps ?? "—"}</strong>
                </div>

            </div>

        </div>

    `;

}


/* =====================================================
   CALENDAR ARROWS
===================================================== */

scrollLeftButton.addEventListener(
    "click",
    () => {

        raceTrack.scrollBy({

            left: -500,

            behavior: "smooth"

        });

    }
);


scrollRightButton.addEventListener(
    "click",
    () => {

        raceTrack.scrollBy({

            left: 500,

            behavior: "smooth"

        });

    }
);


/* =====================================================
   MOUSE WHEEL CALENDAR SCROLL
===================================================== */

raceTrack.addEventListener(

    "wheel",

    event => {

        if (

            Math.abs(event.deltaY) >

            Math.abs(event.deltaX)

        ) {

            event.preventDefault();


            raceTrack.scrollLeft +=
                event.deltaY;

        }

    },

    {
        passive: false
    }

);


/* =====================================================
   DRAG CALENDAR
===================================================== */

let isDragging = false;

let startX = 0;

let startingScrollLeft = 0;


raceTrack.addEventListener(

    "mousedown",

    event => {

        isDragging = true;


        raceTrack.classList.add(
            "dragging"
        );


        startX =
            event.pageX;


        startingScrollLeft =
            raceTrack.scrollLeft;

    }

);


window.addEventListener(

    "mouseup",

    () => {

        isDragging = false;


        raceTrack.classList.remove(
            "dragging"
        );

    }

);


raceTrack.addEventListener(

    "mousemove",

    event => {

        if (!isDragging) {

            return;

        }


        const distance =
            event.pageX - startX;


        raceTrack.scrollLeft =
            startingScrollLeft -
            distance;

    }

);


/* =====================================================
   INITIALIZE
===================================================== */

buildRaceSelector();


/*
    Deliberately do NOT call selectRace().

    User chooses the race first.
*/


/* =====================================================
   LASER CURSOR
===================================================== */

const laserCursor =
    document.querySelector(
        ".laser-cursor"
    );


const laserTrail =
    document.querySelector(
        ".laser-trail"
    );


let mouseX = 0;

let mouseY = 0;

let trailX = 0;

let trailY = 0;


/* ---------------------------------------------
   Track mouse
--------------------------------------------- */

document.addEventListener(

    "mousemove",

    event => {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;


        laserCursor.style.left =
            `${mouseX}px`;


        laserCursor.style.top =
            `${mouseY}px`;

    }

);


/* ---------------------------------------------
   Animate laser trail
--------------------------------------------- */

function animateLaserTrail() {

    trailX +=
        (mouseX - trailX) *
        0.18;


    trailY +=
        (mouseY - trailY) *
        0.18;


    const dx =
        mouseX - trailX;


    const dy =
        mouseY - trailY;


    const distance =
        Math.sqrt(
            dx * dx +
            dy * dy
        );


    const angle =
        Math.atan2(
            dy,
            dx
        ) *
        (180 / Math.PI);


    laserTrail.style.left =
        `${trailX}px`;


    laserTrail.style.top =
        `${trailY}px`;


    laserTrail.style.transform =
        `
            translate(-100%, -50%)
            rotate(${angle}deg)
            scaleX(
                ${Math.min(
                    1.5,
                    Math.max(
                        0.15,
                        distance / 30
                    )
                )}
            )
        `;


    requestAnimationFrame(
        animateLaserTrail
    );

}


animateLaserTrail();


/* =====================================================
   LASER HOVER STATE
===================================================== */

document.addEventListener(

    "mouseover",

    event => {

        const interactive =
            event.target.closest(
                "button, a"
            );


        if (interactive) {

            document.body.classList.add(
                "cursor-hover"
            );

        }

    }

);


document.addEventListener(

    "mouseout",

    event => {

        const interactive =
            event.target.closest(
                "button, a"
            );


        if (interactive) {

            document.body.classList.remove(
                "cursor-hover"
            );

        }

    }

);
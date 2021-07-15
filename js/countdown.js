// Countdown clock
class Countdown {

    constructor(target, config) {

        // Set the date to 'now' if it is left empty
        // Just to prevent errors
        // BONUS: It makes a timer when no time is specified
        if (target === undefined || target === null) { target = Date.now() };

        this.date = new Date(target); // The targeted time to countdown to
        this.target = this.date.getTime(); // The target time in ms
        this.config = config;
        
        this.left = this.target - Date.now();

        this.elements = {}; // Holder for the DOM objects
        this.clock = document.createElement('p');
        this.container = config.container;

        // Generating the DOM objects
        // Generating the required elements
        const disp = this.config.display

        const cont = this.clock;
        cont.classList = 'clock container'

        if (disp.hours) {
            const hours = document.createElement('span');
            hours.classList = 'clock hours';
            this.elements.hours = hours;
        };

        if (disp.minutes) {
            const minutes = document.createElement('span');
            minutes.classList = 'clock minutes';
            this.elements.minutes = minutes;
        };

        if (disp.seconds) {
            const seconds = document.createElement('span');
            seconds.classList = 'clock seconds';
            this.elements.seconds = seconds;
        };

        if (disp.milliseconds) {
            const milliseconds = document.createElement('span');
            milliseconds.classList = 'clock milliseconds';
            this.elements.milliseconds = milliseconds;
        }

        // Adding the elements
        for (let i = 0; i < Object.values(this.elements).length; i++) {

            console.log(cont.appendChild(Object.values(this.elements)[i]))

            if (i !== 0) {
                const seperator = document.createElement('span');
                seperator.classList = 'clock seperator';
                seperator.innerText = ':'
                cont.appendChild(seperator);
            };

            cont.appendChild(Object.values(this.elements)[i]);

        };


    };

    // Append the countdown to the page
    create() {
        this.container.appendChild(this.clock);
    };

    // Runs every tick
    tick() {

        this.left = this.target - Date.now();

        const left = msToTime(this.left, 10)

        for (const [key, value] of Object.entries(this.elements)) {

            let txt = '';

            // Set string to the correct contents
            switch (key) {

                case 'hours':
                    txt = left.hours;
                    break;

                case 'minutes':
                    txt = left.minutes;
                    break;

                case 'seconds':
                    txt = left.seconds;
                    break;

                case 'milliseconds':
                    txt = left.milliseconds;
                    break;

            };

            // Transform string to make it better

            txt = txt.toString()

            if (txt.length < 2) {
                txt = '0' + txt;
            }

            // Set element content to new text

            if (value.innerText === txt) { continue }
            else { value.innerText = txt };            

        };

        // console.log(msToTime(this.left, 10))

    };

    // Controls
    start() {

        this.interval = setInterval(_ => {
            this.tick()
        }, 10);

    };

    stop() {

        clearInterval(this.interval)

    };

};


// Make the clock work
function init() {

    const target = parseInt((new URL(document.location)).searchParams.get('target'));
    const config = {
        display: {
            hours: true,
            minutes: true,
            seconds: true,
            milliseconds: true
        },
        precision: 10,
        container: document.getElementById('clock')
    }

    const counter = new Countdown(target, config);
    counter.create();

    counter.start();


}

window.onload = init


// Utility code
function msToTime(duration, precision) {
    const milliseconds = Math.floor((duration % 1000) / precision);
    let seconds = Math.floor((duration / 1000) % 60);
    let minutes = Math.floor((duration / (1000 * 60)) % 60);
    let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    return {
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds
    }
  }
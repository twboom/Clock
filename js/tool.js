// Normal clock
class Clock {

    constructor(container, config) {

        this.container = container;
        this.config = config
        this.display = config.display;

        this.time = new Date();
        this.clock = document.createElement('p');
        this.elements = [];


        // Generating the clock
        const disp = this.display;
        const elems = this.elements;

        const cont = this.clock;

        // Generating the required elements
        if (disp.hours) {
            const hours = document.createElement('span');
            hours.classList = 'clock hours';
            elems.push(hours);
        };

        if (disp.minutes) {
            const minutes = document.createElement('span');
            minutes.classList = 'clock minutes';
            elems.push(minutes);
        };

        if (disp.seconds) {
            const seconds = document.createElement('span');
            seconds.classList = 'clock seconds';
            elems.push(seconds);
        };

        // Adding the elements
        for (let i = 0; i < elems.length; i++) {

            if (i !== 0) {
                const seperator = document.createElement('span');
                seperator.classList = 'clock seperator';
                cont.appendChild(seperator);
            };

            cont.appendChild(elems[i]);

        };

    };


    // Tick
    tick() {



    }


    // Append clock to the page
    create() {
        this.container.appendChild(cont);
    };


    // Controls
    start() {

        this.tick = setInterval(tick, this.config.precision)

    };

    pause() {

        clearInterval(this.tick)

    };

};


/* 
    Below are utility functions used by Perip itself
*/
const utility = [];
// Normal clock
class Clock {

    constructor(container, config) {

        this.container = container;
        this.config = config
        this.display = config.display;

        this.clock = document.createElement('p');
        this.elements = {};


        // Generating the clock
        const disp = this.display;
        const elems = this.elements;

        const cont = this.clock;
        cont.classList = 'clock container'

        // Generating the required elements
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

        // Adding the elements
        for (let i = 0; i < Object.values(elems).length; i++) {

            if (i !== 0) {
                const seperator = document.createElement('span');
                seperator.classList = 'clock seperator';
                seperator.innerText = ':'
                cont.appendChild(seperator);
            };

            cont.appendChild(Object.values(this.elements)[i]);

        };

    };

    // Append clock to the page
    create() {
        this.container.appendChild(this.clock);
    };


    // Controls
    start() {
        this.tick()
        this.interval = setInterval(_ => {
            this.tick()
        }, this.config.precision)
    };

    pause() {

        clearInterval(this.interval)

    };


    // Tick
    tick() {

        const now = new Date();

        for (const [key, value] of Object.entries(this.elements)) {

            let txt = '';

            // Set string to the correct contents
            switch (key) {

                case 'hours':
                    txt = now.getHours() 
                    break;

                case 'minutes':
                    txt = now.getMinutes() 
                    break;

                case 'seconds':
                    txt = now.getSeconds() 
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

    };

};


/* 
    Below are utility functions used by the tool itself
*/
const utility = [];
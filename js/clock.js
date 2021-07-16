// Clock class
class Clock {

    constructor({parent, display}) {

        // Config
        this.parent = parent;
        this.display = display;


        // Creating the DOM objects
        this.elements = {}; // Holder for DOM objects
        this.container = document.createElement('p'); // Container with entire clock

        const dp = this.display // Shorter version for easier coding
        
        // The elements
        this.elements.hours = document.createElement('span');
        this.elements.minutes = document.createElement('span');
        this.elements.seconds = document.createElement('span');
        this.elements.milliseconds = document.createElement('span');

        // Adding the elements to the container
        for (const [key, value] of Object.entries(this.elements)) {

            // Current element
            const el = value
            const type = key;

            // If neccesary, add seperator
            if (i !== 0) {
                const seperator = document.createElement('span');
                seperator.classList = 'clock seperator';
                seperator.innerText = ':'
                this.container.appendChild(seperator);
            };

            el.classList = `clock count ${type}`
            el.innerText = 'xx'

            // Add element to container
            this.container.appendChild(el);

        };

    };

    // Add elements to the page
    create() { this.parent.appendChild(this.container) };

    // Set contents
    set(time) {

        for (const [key, value] of Object.entries(this.elements)) {

            let txt = '';

            // Set string to the correct contents
            switch (key) {

                case 'hours':
                    txt = time.hours;
                    break;

                case 'minutes':
                    txt = time.minutes;
                    break;

                case 'seconds':
                    txt = time.seconds;
                    break;

                case 'milliseconds':
                    txt = time.milliseconds;
                    break;

            };

        };

    };

};


// Time class
class Time {

    constructor(type, config) {}

}

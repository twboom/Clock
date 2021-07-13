// Countdown clock
class Countdown {

    constructor(target) {

        // Set the date to 'now' if it is left empty
        // Just to prevent errors
        // BONUS: It makes a timer when no time is specified
        if (target === undefined) { target = Date.now() };

        this.date = new Date(target); // The targeted time to countdown to
        this.target = this.date.getTime(); // The target time in ms
        
        this.left = this.target - Date.now();

        this.elements = {}; // Holder for the DOM objects

        // Generating the DOM objects

        

    };

    tick() {

        this.left = this.target - Date.now();



    }

};

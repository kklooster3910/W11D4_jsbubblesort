class Clock {
    // that = this;
    constructor() {
        this.date = new Date();  // 1. Create a Date object.
        this.hours = this.date.getHours();  // 2. Store the hours, minutes, and seconds.
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        this.printTime.bind(this)();  // 3. Call printTime.
        let bindCB = this._tick.bind(this);
        this.interval = setInterval(bindCB, 1000);  // 4. Schedule the tick at 1 second intervals.  
    };

    printTime() {
        let time = `${this.hours}:${this.minutes}:${this.seconds}`;// Format the time in HH:MM:SS
        console.log(time);  // Use console.log to print it.
    };

    _tick() {
        this.seconds += 1;
        if (this.hours === 23 && this.minutes === 59 && this.seconds === 60) {
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        } else if (this.minutes === 59 && this.seconds === 60) {
            this.hours += 1;
            this.minutes = 0;
            this.seconds = 0;
        } else if (this.seconds === 60) {
            this.minutes += 1;
            this.seconds = 0;
        };
            this.printTime();  // 2. Call printTime.
                              // 1. Increment the time by one second.
                              // console.log(this.date);
    };

    // const boundCB = printTime.bind(this);
};

let clock = new Clock();
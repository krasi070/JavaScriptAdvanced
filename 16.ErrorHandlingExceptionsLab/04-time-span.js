class TimeSpan {
    constructor(hours, minutes, seconds) {
        this._checkValue(hours, 'hours');
        this._checkValue(minutes, 'minutes');
        this._checkValue(seconds, 'seconds');
        this.seconds = hours * 3600 + minutes * 60 + seconds;
    }

    get seconds() {
        return this._seconds;
    }

    set seconds(val) {
        this._seconds = val;
    }

    toString() {
        let hours = Math.floor(this.seconds / 3600);
        let minutes = Math.floor(this.seconds % 3600 / 60);
        let minutesStr = ('0' + minutes).slice(-2);
        let seconds = this.seconds % 60;
        let secondsStr = ('0' + seconds).slice(-2);

        return `${hours}:${minutesStr}:${secondsStr}`;
    }

    _checkValue(val, type) {
        if (!Number.isInteger(val)) {
            throw new RangeError(`Invalid ${type}: ${val}`);
        }
    }
}

let ts = new TimeSpan(7, 8, 3);
console.log(ts.toString());
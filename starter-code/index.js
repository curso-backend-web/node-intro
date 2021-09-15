class SortedList {
    constructor() {
        this.items = [];
        this.length = 0;
    }

    add(item) {
        this.items.push(item);
        this.length = this.items.length;

        this.items.sort(function (a, b) {
            return a - b;
        });
    }

    get(pos) {
        if (pos > this.length) {
            const error = new TypeError('OutOfBounds Error');
            throw error;
        }
        return this.items[pos - 1];
    }
    max() {
        if (this.length == 0) {
            const error = new TypeError('EmptyList Error');
            throw error;
        }
        return this.items[this.length - 1];

    }
    min() {
        if (this.length == 0) {
            const error = new TypeError('EmptyList Error');
            throw error;
        }
        return this.items[0];
    }
    average() {
        if (this.length == 0) {
            const error = new TypeError('EmptyList Error');
            throw error;
        }
        // const sum = this.items.reduce((a, b) => a + b, 0);
        const avg = (this.sum() / this.items.length) || 0;
        return avg;
    }
    sum() { 
        if (this.length == 0) {
            const error = new TypeError('EmptyList Error');
            throw error;
        }
        const sum = this.items.reduce((a, b) => a + b, 0);
        return sum;
    }
}


export default SortedList;

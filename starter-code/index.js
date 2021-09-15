class SortedList {
    constructor(){
        this.items = [];
        this.length = 0;
    }
        add(x) {
            this.items.push(x);
            this.length++;
            this.items.sort(function(a, b){return a - b});

        }
        get(pos) {
            if(pos > this.length){
                const error = new TypeError('OutOfBounds Error');
                throw error;
            }
            return this.items[pos - 1];
        }

        max() {
            if(this.length == 0){
                const error = new TypeError('EmptyList Error');
                throw error;
            }
           return Math.max(...this.items);
        }

        min() {
            if(this.length == 0){
                const error = new TypeError('EmptyList Error');
                throw error;
            }
            return Math.min(...this.items);
        }
        average() {
            if(this.length == 0){
                const error = new TypeError('EmptyList Error');
                throw error;
            }

            let suma = 0;
            let promedio;
            this.items.forEach(e => {
                suma = suma + e;
            });
            promedio = suma / this.items.length;
            return promedio;
        }
        sum() {
            if(this.length == 0){
                const error = new TypeError('EmptyList Error');
                throw error;
            }
            let suma = 0;
            this.items.forEach(e => {
                suma = suma + e;
            });
            return suma;
        }
    }

export default SortedList;

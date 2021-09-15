class SortedList {

    constructor(){

        this.items = [];
        this.length = 0;
    }

    add(item) {

            this.items.push(item);
            this.length++;
            this.items.sort(function(a, b){return a - b});
         
    }
    get(pos) {
        
         if(this.items[pos-1]!= null){

                return this.items[pos-1];

         } else {

            throw new TypeError("OutOfBounds Error");
         }
        
    }

    max() {

        if (this.items.length == 0) {

            throw new TypeError('EmptyList Error');

        } else {

            return Math.max.apply(null, this.items);
        }
    }
    min() {

        if (this.items.length == 0) {

            throw new TypeError('EmptyList Error');

        } else {

            return Math.min.apply(null, this.items);
        }
    }
    average() {

        if (this.items.length == 0) {

            throw new TypeError('EmptyList Error');

        } else {

            let total = 0;
            
            for (let k=0; k<this.items.length; k++){

                total = this.items[k] + total;
            }
            return total/this.items.length;
        } 
    }
    sum() {

        if (this.items.length == 0) {

            throw new TypeError('EmptyList Error');

        } else {

            let total = 0;
            
            for (let k=0; k<this.items.length; k++){

                total = this.items[k] + total;
            }
            return total;
        } 

    }
}

export default SortedList;

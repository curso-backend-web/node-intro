class SortedList {
// must have a constructor

constructor(){
    this.items = [];
    this.length = 0;
}
    add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a - b);
    this.length++;

    }
    get(pos) {
      if(this.items.length == 0){
        this.myErr("OutOfBounds Error");
      }
     return this.items[pos];
    }
    max() {
    
     if (this.items.length == 0){
      this.myErr("EmptyList Error");
     }
     this.items.sort((a,b) => a - b);
     return this.items[this.length-1]         
    }
    min() {
      if (this.items.length == 0){
        this.myErr("EmptyList Error");
       }
      this.items.sort((a,b) => a - b);
      return this.items[0]; 
    }
    average() {
      if(this.items.length == 0){
        this.myErr("EmptyList Error");
      }
      return this.items.reduce((a,b) => a + b, 0) / this.length;
    }
    sum() {
      if(this.items.length == 0){
        this.myErr("EmptyList Error");
      }
      return this.items.reduce((a,b) => a + b, 0);
    }
    
    myErr = (str) => {
      let err = new Error(str);
      throw err;
    }

}

export default SortedList;

// Domuntacion
// Jest
// https://jestjs.io/docs/getting-started

// sort
// https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// remove node
// https://stackoverflow.com/questions/20711240/how-to-completely-remove-node-js-from-windows


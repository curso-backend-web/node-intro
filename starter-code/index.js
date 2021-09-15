class SortedList {
// must have a constructor

constructor(){
    this.items = [];
    this.length = 0;
    this.myHelper = false;
}
    add(item) {
    this.items.push(item);
    this.mySort(this.items);
    this.length++;

    }
    get(pos) {
    this.helpMe();
      if(this.myHelper == false){
        this.myErr("OutOfBounds Error");
      } else {
        let arrPos;
        arrPos = this.items[pos];
        return arrPos;
     }
    }
    max() {
      this.helpMe();
      let maxNum = 0;
      if(this.myHelper == false){
        this.myErr("EmptyList Error");
      } else if(this.items.length == 1){
        this.items = this.mySort(this.items);
        maxNum = this.items[0];
        console.log(maxNum)
     } else {
       this.items = this.mySort(this.items);
       maxNum = this.items[-1];
     }
     return maxNum;
    }
    min() {}
    average() {}
    sum() {}
    // sort
    mySort = (arr) => arr.sort((a, b) => a - b);
    //  helper
    helpMe = () => (this.items.length == 0) ? this.myHelper : this.myHelper = true;
    // error
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


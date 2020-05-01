Array.prototype.reduce = function(combiner, initial){        
    if(this.length === 0){
        return this;
    }

    let counter, accumulated;
    
    if(arguments.length === 1){
        counter = 1;
        accumulated = this[0];
    }

    if(arguments.length >= 2){
        counter = 0;
        accumulated = initial;
    }
    
    while(counter < this.length){
        accumulated = combiner(accumulated, this[counter++]);
    }
    return [accumulated];
}



let res = [1,2,3].reduce((acc, curr) => acc + curr);
console.log(res);

var result = [].reduce((acc, curr) => acc + curr);
console.log(result);

var result = [1,3].reduce((acc, curr) => acc + curr);
console.log(result);

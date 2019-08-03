var Book = function(name, price){
    var priceChanging = [],
        priceChanged = [];
    this.name = function(val){
        if(val !== undefined){
            name = val;
        }
        return name;
    }

    this.price =function(val){
        if(val !== undefined && val!==price){
            for(var i = 0; i < priceChanging.length; i++){
                if(!priceChanging[i](this, val)){
                    return price;
                }
            }
            price = val;
            for(var j = 0; j < priceChanged.length; j++){
                priceChanged[j](this);
            }
        }
        return price;
    }
    
    this.onPriceChanging = function(callback){
        priceChanging.push(callback); 
    }

    this.onPriceChanged = function(callback){
        priceChanged.push(callback);
    }
};


var book = new Book('Javascript The Awesome Thing', 99.99);
book.onPriceChanging(function(book, price){
    if(price > 100){
        console.log('Price is way toooo high');
        return false;
    }
    return true;
});
book.onPriceChanged(function(book){
    console.log('price has changed: ', book.price());
});

console.log(book.name(), book.price(33.21));
book.price(3321);


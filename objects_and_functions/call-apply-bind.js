// call apply and bind

/*Function Execution Context
    Variable Env, this, Outer Environment
*/

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullname: function(){
        var fullname = this.firstname+' '+this.lastname;
        return fullname;
    }
}


var logName = function(lang1, lang2){
    console.log('Logged: '+ this.getFullname());
    console.log('arguments: '+ lang1 +' '+ lang2);
    console.log('---------');
}

var logPersonName = logName.bind(person);


logPersonName();

logName.call(person, 'en', 'es');

logName.apply(person, ['en', 'es']);

(function log(lang1, lang2){
    console.log(lang1.toLowerCase(), lang2.toLowerCase(), this.getFullname());
}).apply(person, ['ENGLISH', 'ESPANOL']);



// Functon borrowing

var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}

console.log(person.getFullname.apply(person2, ['Bengali', 'Arabic']));

// Functon currying
function multiply(a, b){
    return a*b;
}
console.log('multiply: ', multiply(4,5));
var multipleByTen = multiply.bind(this, 10);
/*
    multippleByTen is equivalent to 
    multiple(b){
        var a = 10;
        return a*b;
    }

    .bind with parameters permanently sets the parameter value
*/
console.log('multiplyBy10: ', multipleByTen(2,2));



/**
 
var rectangle =  {
    height: 10,
    width: 20,
    name: 'rectangle',
    area: function(){
        return this.height * this.width;
    }
}

var squery = {
    height: 10,
    width: 10,
    name: 'square',
    area: function(){
        return this.height * this.width;
    }
}

var areaLogger = function(){
    console.log('Area of '+this.name+' '+this.area());
}

areaLogger.call(rectangle);
areaLogger.call(squery);


 
 */
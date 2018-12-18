var print = console.log;
// bind
print('bind.............');
function getFullname() {
    if (this.firstName && this.lastName) {
        return this.firstName + ' ' + this.lastName;
    }
    if (this.name) {
        return this.name;
    }
    if (this.fullName) {
        return this.fullName;
    }
    return 'No name found!';
}

var person1 = {
    address: 'Address'
}

var person2 = {
    firstName: 'First',
    lastName: 'Last'
}

var person3 = {
    name: 'Full name'
}

print(getFullname.bind(person1)());
print(getFullname.bind(person2)());
print(getFullname.bind(person3)());


// call
print('call................');

function getFullName2(firstName, lastName) {
    if (this.firstName && this.lastName) {
        return this.firstName + ' ' + this.lastName;
    }
    if (this.firstName && !this.lastName) {
        return this.firstName + ' ' + (lastName || '');
    }
    if (!this.firstName && this.lastName) {
        return (firstName || '') + ' ' + this.lastName;
    }
    if (!this.firstName && !this.lastName) {
        return (firstName || '') + ' ' + (lastName || '');
    }
}

print(getFullName2.call(person1, 'First Name', 'Last Name'));
print(getFullName2.call(person2, 'Person', 'Two'));
print(getFullName2.call(person3, 'Person', 'Three'));

// apply
print('apply.......');

print(getFullName2.apply(person1, ['First Name', 'Last Name']));
print(getFullName2.apply(person2, ['Person', 'Two']));
print(getFullName2.apply(person3, ['Person', 'Three']));




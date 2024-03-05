class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = 0;
        this.greet = function() {
            return "Hello "+this.firstName+ " "+ this.lastName+ " e tem "+ this.age + " anos.";
        }
    }
}

module.exports = Person;

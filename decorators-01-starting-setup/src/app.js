var Person = /** @class */ (function () {
    function Person() {
        this.name = 'Max';
        console.log('New person is being created.');
    }
    return Person;
}());
var anyone = new Person();
console.log(anyone);

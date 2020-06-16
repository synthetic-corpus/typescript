// Code goes here!
var names = [];
var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('All Done here');
    }, 1800);
});
function merge(A, B) {
    return Object.assign(A, B);
}
var mergedObj = merge({ name: 'Gill', things: ['Sport'] }, { shows: ['Star Trek'] });
function countAndDescribe(element) {
    var description = 'Has no Value';
    if (element.length > 0) {
        description = "This thing has a lenght of " + element.length;
    }
    return [element, description];
}
// anything you put into this function must have a length
console.log(countAndDescribe('a series of characters'));

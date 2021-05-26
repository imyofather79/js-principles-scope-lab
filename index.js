// Write your solution in this file!

var customerName = 'bob';


function upperCaseCustomerName() {
    name = customerName.toUpperCase();
    customerName = name;
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() { 
    let newbestCustomer = 'maybe bob';
    bestCustomer = newbestCustomer;
}

const leastFavoriteCustomer = 'tom';

function changeLeastFavoriteCustomer() {
    let newLeastFavoriteCustomer = 'Peter';
    leastFavoriteCustomer = newLeastFavoriteCustomer;
}
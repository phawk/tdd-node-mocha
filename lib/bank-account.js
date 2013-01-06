module.exports = {};

/**
*   create()
*   ========
*
*   Creates and returns a new Bank Account Object
*   This allows us to have privately scoped variables
*/
module.exports.create = function(initialBalance) {

    // A non exported variable to hold the balance that our
    var balance = 0;

    var Account = function(initialBalance) {
        if (parseInt(initialBalance)) balance = initialBalance;
    };

    // Returns the current balance of the account
    Account.prototype.getBalance = function() {
        return balance;
    };

    // Lodges money into the account
    Account.prototype.lodge = function(amount) {
        balance = parseInt(amount) + parseInt(balance);
    };

    // Take some of your monies out
    Account.prototype.withdraw = function(amount) {
        balance = parseInt(balance) - parseInt(amount);
    };

    // Return the new instance of the Account Object
    return new Account(initialBalance);
};
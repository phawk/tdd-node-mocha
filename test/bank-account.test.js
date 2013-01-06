    // Require chai.js expect module for assertions
var expect = require('chai').expect,
    // Require our Account to test it
    Account = require('../lib/bank-account');

// Create a new test suite for our Bank Account
suite("Bank Account Tests", function() {

    // Define a pending test
    test("should exist", function() {
        var account = Account.create();
        expect(account).to.be.ok;
    });

    test("getBalance()", function() {
        var account = Account.create();
        expect(account.getBalance()).to.equal(0);
    });

    suite("lodge()", function() {

        test("should update the balance", function() {
            // Create a new account
            var account = Account.create();

            // Put 100 monies into the account
            account.lodge(100);

            // Check the balance is now 100
            expect(account.getBalance()).to.equal(100);
        });

    });

    suite("withdraw()", function() {

        test("should update the balance", function() {
            // Create a new account
            var account = Account.create();

            // Put 1,000 monies into the account
            account.lodge(1000);

            // Take out 150 monies
            account.withdraw(150);

            // Check the balance is now 850
            expect(account.getBalance()).to.equal(850);
        });

    });

    suite("multiple accounts", function() {

        test("should not share the same balance", function() {
            var acc1 = Account.create();
            acc1.lodge(110);

            var acc2 = Account.create();
            acc2.lodge(95);

            expect(acc1.getBalance()).to.equal(110);
            expect(acc2.getBalance()).to.equal(95);
        });

    });

    suite("opening balance", function() {

        test("should affect the balance", function() {
            var account = Account.create(1175);

            expect(account.getBalance()).to.equal(1175);
        });

    });

});
const max = require("../src/app").max;
const expect = require("chai").expect;

describe("Given two numbers, find the larger of these two numbers", function () {
    it ("Should return 10 when given 10 and 2", function () {
        let result = max(10, 2);
        expect(result).to.be.equal(10);
    });

    it ("Should return the positive number when given a positive and negative number", function () {
        let result = max(-6, 3);
        expect(result).to.be.equal(3);
    });
});

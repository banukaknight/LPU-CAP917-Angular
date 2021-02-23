"use strict";
exports.__esModule = true;
exports.Book = void 0;
//class definition
var Book = /** @class */ (function () {
    //constructor
    function Book(t, a, p) {
        var _this = this;
        //function-declare-sqr
        this.show_book = function () {
            console.log("My new book is on:: " + _this.title + " written by:: " + _this.author + " bought at INR:: " + _this.price);
        };
        this.title = t;
        this.author = a;
        this.price = p;
    }
    return Book;
}());
exports.Book = Book;

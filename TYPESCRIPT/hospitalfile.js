"use strict";
exports.__esModule = true;
exports.doctor = exports.hospital = void 0;
var hospital = /** @class */ (function () {
    function hospital(var1, var2, var3, var4) {
        this.id = var1;
        this.firstName = var2;
        this.lastName = var3;
        this.MobNo = var4;
    } //end constructor
    hospital.prototype.detail = function () {
        console.log(this.id + ", " + this.firstName + ", " + this.lastName + ", " + this.MobNo);
    }; //end detail func
    return hospital;
}()); //end class
exports.hospital = hospital;
var first = new hospital(1, "Aparn", "sharma", 34234234); //creating an obj
var second = new hospital(2, "John", "Wats", 54545454);
var doctor = /** @class */ (function () {
    function doctor(var1, var2) {
        this.id = var1;
        this.position = var2;
    } //end constructor
    doctor.prototype.info = function () {
        console.log(this.id + ", " + this.position);
    }; //end detail func
    return doctor;
}()); //end class
exports.doctor = doctor;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var JumbortronComponent = (function () {
    function JumbortronComponent() {
        this.jbtHeading = "hello world";
        this.jbtText = "I am khaled aljundi and I am learinig angular 2";
        this.jbtBtnText = "Read more";
        this.jbtBtnUrl = "/about";
    }
    return JumbortronComponent;
}());
JumbortronComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'jumbortron',
        templateUrl: 'jumbortron.component.html'
    }),
    __metadata("design:paramtypes", [])
], JumbortronComponent);
exports.JumbortronComponent = JumbortronComponent;
//# sourceMappingURL=jumbortron.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AEventsSbService = void 0;
var core_1 = require("@angular/core");
var a_event_1 = require("../models/a-event");
var AEventsSbService = /** @class */ (function () {
    function AEventsSbService() {
        this.aEvents = [];
        for (var i = 0; i < 9; i++) {
            this.addRandomAEvent();
        }
    }
    // tslint:disable-next-line:typedef
    AEventsSbService.prototype.addRandomAEvent = function () {
        this.aEvents.push(a_event_1.AEvent.createRandomAEvent());
    };
    AEventsSbService.prototype.findAll = function () {
        // TODO return all the list of all AEvents
        return this.aEvents;
    };
    AEventsSbService.prototype.findById = function (eId) {
        // TODO find and return the AEvent with the specified ID return null if none is found
        // tslint:disable-next-line:triple-equals
        return this.aEvents.find(function (event) { return event.id == eId; });
    };
    // @ts-ignore
    AEventsSbService.prototype.save = function (aEvent) {
        // tslint:disable-next-line:max-line-length
        // TODO replace the AEvent with the same id with the provided return the old, replace aEvent add the new aEvent if none existed and return null
        // tslint:disable-next-line:triple-equals
        // @ts-ignore
        // tslint:disable-next-line:triple-equals no-unused-expression
        // @ts-ignore
        // tslint:disable-next-line:triple-equals
        this.aEvents[this.aEvents.findIndex(function (event) { return event.id == aEvent.id; })] = aEvent;
    };
    AEventsSbService.prototype.deleteById = function (eId) {
        // TODO remove identified aEvent from the collection and return the remove instance, return null if none existed
        // tslint:disable-next-line:triple-equals
        var index = this.aEvents.findIndex(function (event) { return event.id == eId; }); // haalt index op
        // tslint:disable-next-line:triple-equals
        if (index == -1) {
            return null;
        }
        return this.aEvents.splice(index, 1)[0]; // haalt de plek van de index weg en returned wat gespliced is. splice geeft array terug.
    };
    AEventsSbService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AEventsSbService);
    return AEventsSbService;
}());
exports.AEventsSbService = AEventsSbService;

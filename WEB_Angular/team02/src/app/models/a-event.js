"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = exports.AEventStatus = exports.AEvent = void 0;
var AEvent = /** @class */ (function () {
    function AEvent(id, title, start, end, status, IsTicketed, entranceFee, maxParticipants) {
        this.id = id;
        this.title = title;
        this.start = start;
        this.end = end;
        this.status = status;
        this.IsTicketed = IsTicketed;
        this.entranceFee = entranceFee;
        this.maxParticipants = maxParticipants;
    }
    // tslint:disable-next-line:typedef
    AEvent.createRandomAEvent = function () {
        // @ts-ignore
        var event = new AEvent();
        // @ts-ignore
        event.id = 20001 + this.counter++;
        event.title = 'Fantastic event ' + this.counter;
        var date = new Date();
        date.setMonth(date.getMonth() * (this.counter + 1));
        event.start = date;
        date = new Date();
        date.setMonth(date.getMonth() * (this.counter + 1));
        event.end = date;
        var rand = Math.floor(Math.random() * Object.keys(AEventStatus).length);
        var randomStatus = AEventStatus[Object.keys(AEventStatus)[rand]];
        event.status = randomStatus;
        event.entranceFee = Math.floor(Math.random() * 6) * 10;
        event.maxParticipants = Math.floor((Math.random() + 1) * 6) * 100;
        if (event.status === 'PUBLISHED') {
            event.entranceFee = Math.floor(Math.random() * 6) * 10;
            event.maxParticipants = Math.floor((Math.random() + 1) * 6) * 100;
        }
        else {
            var fee = null;
            event.entranceFee = fee || 'free';
            event.maxParticipants = fee;
        }
        event.IsTicketed = Math.round(Math.random());
        return event;
    };
    AEvent.counter = 0;
    return AEvent;
}());
exports.AEvent = AEvent;
var AEventStatus;
(function (AEventStatus) {
    AEventStatus["draft"] = "DRAFT";
    AEventStatus["published"] = "PUBLISHED";
    AEventStatus["cancelled"] = "CANCELLED";
})(AEventStatus = exports.AEventStatus || (exports.AEventStatus = {}));
// tslint:disable-next-line:max-classes-per-file
var Title = /** @class */ (function () {
    function Title() {
    }
    return Title;
}());
exports.Title = Title;

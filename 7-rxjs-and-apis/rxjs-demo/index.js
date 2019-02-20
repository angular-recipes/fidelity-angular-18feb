"use strict";
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var searchBox = document.getElementById('search-term');
var observable1 = rxjs_1.of('Hello');
var searchObservable = rxjs_1.fromEvent(searchBox, 'input');
var observer = function (v) { return console.log(v); };
var dancerObserver = function (run) {
    console.log('Run: ' + run);
    if (run == 4 || run == 6) {
        console.log('dancing....');
    }
};
searchObservable
    .pipe(operators_1.map(function (e) { return e.target.value; }), operators_1.map(function (v) { return v.split(','); }), operators_1.map(function (v) { return v.pop(); }), operators_1.filter(function (v) { return v != ''; }), operators_1.filter(function (v) { return v >= 1 && v <= 6; }))
    .subscribe(dancerObserver);

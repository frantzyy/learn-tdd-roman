'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _roman = require('./roman');

Object.keys(_roman).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _roman[key];
    }
  });
});
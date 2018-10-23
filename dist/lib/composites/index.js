'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Parallel = require('./Parallel');

Object.keys(_Parallel).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Parallel[key];
    }
  });
});

var _Race = require('./Race');

Object.keys(_Race).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Race[key];
    }
  });
});

var _Selector = require('./Selector');

Object.keys(_Selector).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Selector[key];
    }
  });
});

var _Sequence = require('./Sequence');

Object.keys(_Sequence).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Sequence[key];
    }
  });
});
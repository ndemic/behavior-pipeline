'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Node = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = require('./..');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaults = { name: 'Node', properties: {} };

var Node = exports.Node = function () {
    function Node() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;

        _classCallCheck(this, Node);

        params = _extends({}, defaults, params);

        this.name = params.name;
        this.properties = params.properties;
    }

    _createClass(Node, [{
        key: 'add',
        value: function add() {
            throw new Error(_.Errors.NOT_IMPLEMENTED);
        }
    }, {
        key: 'execute',
        value: function execute() {
            return Promise.reject(new Error(_.Errors.NOT_IMPLEMENTED));
        }
    }]);

    return Node;
}();
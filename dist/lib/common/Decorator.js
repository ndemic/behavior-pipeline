'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Decorator = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Node2 = require('./Node');

var _ = require('./..');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = { name: 'Decorator', properties: {} };

var Decorator = exports.Decorator = function (_Node) {
    _inherits(Decorator, _Node);

    function Decorator() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;

        _classCallCheck(this, Decorator);

        return _possibleConstructorReturn(this, (Decorator.__proto__ || Object.getPrototypeOf(Decorator)).call(this, _extends({}, defaults, params)));
    }

    _createClass(Decorator, [{
        key: 'add',
        value: function add(child) {
            if (this.child) {
                throw new Error(_.Errors.CHILD_EXISTS);
            }

            if (!(child instanceof _Node2.Node)) {
                throw new Error(_.Errors.CHILD_INVALID);
            }

            this.child = child;

            return this;
        }
    }, {
        key: 'execute',
        value: function execute() {
            return Promise.reject(new Error(_.Errors.NOT_IMPLEMENTED));
        }
    }]);

    return Decorator;
}(_Node2.Node);
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Reject = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = require('./..');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = { name: 'Reject', properties: {} };

var Reject = exports.Reject = function (_Decorator) {
    _inherits(Reject, _Decorator);

    function Reject() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;

        _classCallCheck(this, Reject);

        return _possibleConstructorReturn(this, (Reject.__proto__ || Object.getPrototypeOf(Reject)).call(this, _extends({}, defaults, params)));
    }

    _createClass(Reject, [{
        key: 'execute',
        value: function execute(params, blackboard) {
            if (this.child && this.child instanceof _.Node) {
                return this.child.execute(params, blackboard).then(function () {
                    throw new Error(_.Errors.DECORATOR_REJECTED);
                });
            }

            return Promise.reject(new Error(_.Errors.CHILD_INVALID));
        }
    }]);

    return Reject;
}(_.Decorator);
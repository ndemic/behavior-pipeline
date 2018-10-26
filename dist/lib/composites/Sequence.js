'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Sequence = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ = require('./..');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaults = { name: 'Sequence', properties: {} };

var Sequence = exports.Sequence = function (_Composite) {
    _inherits(Sequence, _Composite);

    function Sequence() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;

        _classCallCheck(this, Sequence);

        return _possibleConstructorReturn(this, (Sequence.__proto__ || Object.getPrototypeOf(Sequence)).call(this, _extends({}, defaults, params)));
    }

    _createClass(Sequence, [{
        key: 'execute',
        value: function execute(params, blackboard) {
            var _this2 = this;

            var execute = function execute(current, output) {
                var child = _this2.children[current++];

                if (child) {
                    return child.execute(output, blackboard).then(function (o) {
                        return execute(current, o);
                    });
                }

                return Promise.resolve(output);
            };

            var index = 0;

            return execute(index, params).then(function (output) {
                return output;
            });
        }
    }]);

    return Sequence;
}(_.Composite);
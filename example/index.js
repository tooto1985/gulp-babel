﻿"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function Player(name) {
	_classCallCheck(this, Player);

	this.name = name;
};

var User = function (_Player) {
	_inherits(User, _Player);

	function User(name, age) {
		_classCallCheck(this, User);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(User).call(this, name));

		_this.age = age;
		return _this;
	}

	return User;
}(Player);

var a = new User("Mark", 30);
console.log(a.age);
//# sourceMappingURL=index.js.map

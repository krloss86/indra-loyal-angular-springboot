"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubClaseB = exports.SubClase = exports.ClaseGenerica = void 0;
/*definicion de una clase generica*/
var ClaseGenerica = /** @class */ (function () {
    function ClaseGenerica(id) {
        this.id = id;
    }
    ClaseGenerica.prototype.save = function (entidad) {
        console.log("grabando entidad generica", entidad);
    };
    return ClaseGenerica;
}());
exports.ClaseGenerica = ClaseGenerica;
/*sub clase hija del generic */
var SubClase = /** @class */ (function (_super) {
    __extends(SubClase, _super);
    function SubClase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SubClase;
}(ClaseGenerica));
exports.SubClase = SubClase;
var SubClaseB = /** @class */ (function (_super) {
    __extends(SubClaseB, _super);
    function SubClaseB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SubClaseB;
}(ClaseGenerica));
exports.SubClaseB = SubClaseB;

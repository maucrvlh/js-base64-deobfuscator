"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function deobfuscate(base64ObfucatedString) {
    var e = base64ObfucatedString;
    try {
        return e.split('').map(function (z, i) { return i == e.length - 1 ? (function () { var s = ''; for (var q = 0; q < (e.charCodeAt(e.length - 1) - 75); q++) {
            s += String.fromCharCode(61);
        } return s; })() : i == e.length - 1 - 1 ? null : i == Math.round((e.length - 2 + (e.charCodeAt(e.length - 1) - 75)) / 2) ? e[e.length - 1 - 1] : z; }).join('');
    }
    catch (err) {
        throw new Error('Não foi possível retornar à string original. É uma string ofuscada?');
    }
}
exports.deobfuscate = deobfuscate;

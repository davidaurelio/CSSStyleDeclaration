'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-wrap-shape-outside', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-wrap-shape-outside');
    },
    enumerable: true,
    configurable: true
};

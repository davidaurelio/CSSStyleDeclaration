'use strict';

module.exports.definition = {
    set: function (v) {
        this.setProperty('-webkit-column-count', v);
    },
    get: function () {
        return this.getPropertyValue('-webkit-column-count');
    },
    enumerable: true,
    configurable: true
};

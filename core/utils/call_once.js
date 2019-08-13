/**
 * DevExtreme (core/utils/call_once.js)
 * Version: 18.2.10
 * Build date: Mon Jul 29 2019
 *
 * Copyright (c) 2012 - 2019 Developer Express Inc. ALL RIGHTS RESERVED
 * Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
 */
"use strict";
var callOnce = function(handler) {
    var result;
    var _wrappedHandler = function() {
        result = handler.apply(this, arguments);
        _wrappedHandler = function() {
            return result
        };
        return result
    };
    return function() {
        return _wrappedHandler.apply(this, arguments)
    }
};
module.exports = callOnce;

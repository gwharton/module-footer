define([
], function () {
    'use strict';

    return function (config, element) {
        let dateObject = new Date();
        element.textContent = dateObject.getFullYear();
    }
});

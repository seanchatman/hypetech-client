'use strict';
var valuename = 'family';

module.exports = function(app) {
    app.value(app.name + '.' + valuename, {});
};
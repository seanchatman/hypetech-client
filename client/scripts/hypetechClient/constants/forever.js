'use strict';
var constantname = 'forever';

module.exports = function(app) {
    app.constant(app.name + '.' + constantname, {});
};
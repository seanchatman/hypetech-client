'use strict';

module.exports = function(app) {
    // inject:start
    require('./forever')(app);
    // inject:end
};
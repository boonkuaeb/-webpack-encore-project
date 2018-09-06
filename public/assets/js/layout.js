'use strict';

const $ = require('jquery');
global.$ = $; // use for upgrade to webpack
require('bootstrap');

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

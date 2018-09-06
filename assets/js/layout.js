'use strict';

const $ = require('jquery');
global.$ = $; // use for upgrade to webpack

require('bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
require('font-awesome/css/font-awesome.css');
require('../css/main.scss');

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

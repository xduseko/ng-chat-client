var uiRouter = require('angular-ui-router');

var loginTemplate = require('./login/login-page.html');
var userTemplate = require('./user/user-page.html');

module.exports = function($stateProvider, $authProvider) {
    'use strict';

    $stateProvider
        .state('login', {
            url: '/login',
            template: loginTemplate,
            controller: 'loginController as vm'
        })
        .state('user', {
            abstract: true,
            template: userTemplate,
            controller: 'userController as usr'
        });

    $authProvider.baseUrl = 'http://localhost:8008/api';

    $authProvider.github({
        clientId: '1a6d774f4bb5a6d1c97a'
    });

    $authProvider.google({
        clientId: '1004489526825-32qv25037p5b6ffggb2tev7ieoru3top.apps.googleusercontent.com'
    });
};

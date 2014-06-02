/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var stApp = angular.module('thoughtsApp', ['ionic', 'firebase']);

stApp.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

            .state('signup', {
                url: '/signup',
                templateUrl: 'templates/signup.html',
                controller: 'LoginCtrl'
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            })
            .state('home', {
                url: '/home',
                abstract: true,
                templateUrl: 'templates/side-menu.html'
            })
            .state('home.dashboard',{
                url: '/dashboard',
                views: {
                    'dashboard': {
                        templateUrl:'templates/dashboard.html',
                        controller: 'ThoughtsCtrl'
                    }
                }
            })

    $urlRouterProvider.otherwise('/signup');
});
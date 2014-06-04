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
            .state('home.tab', {
                url: '/tab',
                abstract: true,
                views: {
                    'tabs':{
                        templateUrl: 'templates/tabs.html'
                    }
                }
            })
            .state('home.tab.dashboard',{
                url: '/dashboard',
                views: {
                    'tab-dashboard': {
                        templateUrl:'templates/tab-dashboard.html',
                        controller: 'ThoughtsCtrl'
                    }
                }
            })
            .state('home.tab.my-thoughts',{
                url: '/my-thoughts',
                views: {
                    'tab-my-thoughts': {
                        templateUrl:'templates/tab-my-thoughts.html',
                        controller: 'ThoughtsCtrl'
                    }
                }
            })
            .state('home.tab.account',{
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl:'templates/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })

    $urlRouterProvider.otherwise('/signup');
});
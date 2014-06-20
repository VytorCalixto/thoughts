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
                    'tabs': {
                        templateUrl: 'templates/tabs.html'
                    }
                }
            })
            .state('home.tab.dashboard', {
                url: '/dashboard',
                views: {
                    'tab-dashboard': {
                        templateUrl: 'templates/tabs/tab-dashboard.html',
                        controller: 'ThoughtsCtrl'
                    }
                }
            })
            .state('home.tab.user-dashboard', {
                url: '/dashboard/user/:userEmail',
                views: {
                    'tab-dashboard': {
                        templateUrl: 'templates/tabs/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('home.tab.my-thoughts', {
                url: '/my-thoughts',
                views: {
                    'tab-my-thoughts': {
                        templateUrl: 'templates/tabs/tab-my-thoughts.html',
                        controller: 'ThoughtsCtrl'
                    }
                }
            })
            .state('home.tab.user-my-thoughts', {
                url: '/my-thoughts/user/:userEmail',
                views: {
                    'tab-my-thoughts': {
                        templateUrl: 'templates/tabs/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('home.tab.account', {
                url: '/account',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tabs/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('home.tab.user-account', {
                url: '/account/user/:userEmail',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tabs/tab-account.html',
                        controller: 'AccountCtrl'
                    }
                }
            })
            .state('home.tab.favorites', {
                url: '/account/favorites/:userEmail',
                views: {
                    'tab-account': {
                        templateUrl: 'templates/tabs/user-favorites.html',
                        controller: 'FavoriteThoughtsCtrl'
                    }
                }
            })

    $urlRouterProvider.otherwise('/signup');
});
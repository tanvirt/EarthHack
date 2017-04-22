angular.module('main').config(function($urlRouterProvider, $stateProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/components/home/homeView.html',
        controller: 'HomeController'
    });

    $urlRouterProvider.otherwise('home')
});

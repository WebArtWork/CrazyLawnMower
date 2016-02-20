angular.module('Game',['ui.router','ngMaterial','ngImgCrop','pascalprecht.translate','ng-sortable'])
.factory(factories)
.controller(controllers)
.filter(filters)
.directive(directives)
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider.otherwise('/Game');

	$locationProvider.html5Mode(true);
});

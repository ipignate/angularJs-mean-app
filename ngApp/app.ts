namespace zoo {

    angular.module('zoo', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: zoo.Controllers.HomeCtrl,
                controllerAs: 'vm'
            })
            .state('add', {
                url: '/add',
                templateUrl: '/ngApp/views/add.html',
                controller: zoo.Controllers.AddCtrl,
                controllerAs: 'vm'
            })
            .state('edit', {
                url: '/edit/:id',
                templateUrl: '/ngApp/views/edit.html',
                controller: zoo.Controllers.EditCtrl,
                controllerAs: 'vm'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}

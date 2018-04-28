var gardenKits = angular.module('gardenKits',['ngAnimate','ui.bootstrap','ui.router']);

gardenKits.config(routerConfig)
          .controller('mainCtrl',mainCtrl);

function mainCtrl(){
    var vm = this;
    vm.thisValue = "hello world";

    return vm;
}
function routerConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: './app/home/home.html'
        })

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });

}




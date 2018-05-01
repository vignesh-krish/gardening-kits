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
        .state('aboutus', {
            url: '/aboutus',
            templateUrl: './app/about-us/about-us.html'
         });

}
routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];




gardenKits.controller('headerCtrl',headerCtrl);

function headerCtrl($scope) {
    vm = {};
    $scope.isNavCollapsed = true;
}
headerCtrl.$inject = ["$scope"];
var gardenKits = angular.module("gardenKits");
gardenKits.directive("gkBanner", function() {
    return {
        templateUrl : "app/shared/directives/banner/banner.html"
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImhlYWRlclxcaGVhZGVyLmNvbnRyb2xsZXIuanMiLCJzaGFyZWRcXGRpcmVjdGl2ZXNcXGJhbm5lclxcYmFubmVyLmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnYXJkZW5LaXRzID0gYW5ndWxhci5tb2R1bGUoJ2dhcmRlbktpdHMnLFsnbmdBbmltYXRlJywndWkuYm9vdHN0cmFwJywndWkucm91dGVyJ10pO1xyXG5cclxuZ2FyZGVuS2l0cy5jb25maWcocm91dGVyQ29uZmlnKVxyXG4gICAgICAgICAgLmNvbnRyb2xsZXIoJ21haW5DdHJsJyxtYWluQ3RybCk7XHJcblxyXG5mdW5jdGlvbiBtYWluQ3RybCgpe1xyXG4gICAgdmFyIHZtID0gdGhpcztcclxuICAgIHZtLnRoaXNWYWx1ZSA9IFwiaGVsbG8gd29ybGRcIjtcclxuXHJcbiAgICByZXR1cm4gdm07XHJcbn1cclxuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuXHJcbiAgICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvaG9tZScpO1xyXG5cclxuICAgICRzdGF0ZVByb3ZpZGVyXHJcblxyXG4gICAgICAgIC8vIEhPTUUgU1RBVEVTIEFORCBORVNURUQgVklFV1MgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC5zdGF0ZSgnaG9tZScsIHtcclxuICAgICAgICAgICAgdXJsOiAnL2hvbWUnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2hvbWUvaG9tZS5odG1sJ1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIEFCT1VUIFBBR0UgQU5EIE1VTFRJUExFIE5BTUVEIFZJRVdTID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC5zdGF0ZSgnYWJvdXR1cycsIHtcclxuICAgICAgICAgICAgdXJsOiAnL2Fib3V0dXMnLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJy4vYXBwL2Fib3V0LXVzL2Fib3V0LXVzLmh0bWwnXHJcbiAgICAgICAgIH0pO1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCJnYXJkZW5LaXRzLmNvbnRyb2xsZXIoJ2hlYWRlckN0cmwnLGhlYWRlckN0cmwpO1xyXG5cclxuZnVuY3Rpb24gaGVhZGVyQ3RybCgkc2NvcGUpIHtcclxuICAgIHZtID0ge307XHJcbiAgICAkc2NvcGUuaXNOYXZDb2xsYXBzZWQgPSB0cnVlO1xyXG59IiwidmFyIGdhcmRlbktpdHMgPSBhbmd1bGFyLm1vZHVsZShcImdhcmRlbktpdHNcIik7XHJcbmdhcmRlbktpdHMuZGlyZWN0aXZlKFwiZ2tCYW5uZXJcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsIDogXCJhcHAvc2hhcmVkL2RpcmVjdGl2ZXMvYmFubmVyL2Jhbm5lci5odG1sXCJcclxuICAgIH07XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
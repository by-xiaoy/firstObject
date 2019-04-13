angular.module('myApp', [])
    .run(function($rootScope) {
        $rootScope.someProperty = 'hello computer';
        $rootScope.someAction = function() {
            $rootScope.someProperty = 'hello human';
        };
    });
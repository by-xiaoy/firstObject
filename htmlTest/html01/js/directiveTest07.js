angular.module('myApp',[])
    .controller('LotteryController', function($scope) {
        $scope.generateNumber = function() {
            return Math.floor((Math.random()*10)+1);
        };
    });
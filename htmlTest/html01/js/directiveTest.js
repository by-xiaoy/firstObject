angular.module('myApp',[])
    .directive('myDirective', function() {
        return {
            restrict: 'E',
            //替换标签
            replace: true,
            template: '<a href="http://google.com">Click me to go to Google</a>'
        };
    });
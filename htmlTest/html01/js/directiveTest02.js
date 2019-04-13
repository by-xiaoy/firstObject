angular.module('myApp', [])
    .directive('myDirective', function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                myUrl: '@myUrl', //绑定策略
                myLinkText: '@myLinkText' //绑定策略
            },
            template: '<a href="{{myUrl}}">' +
                '{{myLinkText}}</a>'
        };
    });
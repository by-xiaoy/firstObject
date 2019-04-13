angular.module('myApp', [])
    .controller('MainController', function($scope) {
    })
    .directive('scopeExample', function() {
        return {
            restrict: 'A',
            scope: {
                ngModel: '=', // 将ngModel同指定对象绑定
                onSend: '&', // 将引用传递给这个方法
                fromName: '@' // 储存与fromName相关联的字符串
            },
            template: '<div>ngModel--- {{ ngModel }} -onSend--{{onSend}} -fromName--{{fromName}}</div>'
        };
    });
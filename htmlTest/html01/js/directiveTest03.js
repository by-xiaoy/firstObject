angular.module('myApp', [])
    .directive('myDirective', function() {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                myUrl: '=someAttr', // 经过了修改
                myLinkText: '@'
            },
            template: "<div>\n" +
                "<label>My Url Field:</label>\n" +
                "<input type=\"text\"\n" +
                "ng-model=\"myUrl\" />\n" +
                "<a href=\"{{myUrl}}\">{{myLinkText}}</a>\n" +
                "</div>"

            };
        });
/**
 * 通过$interpolate进行重新定义插值符'__'
 */
angular.module('app', ['emailParser'])

    .controller('MyController', ['$scope', 'EmailParser',
        function($scope, EmailParser) {
            // 设置监听
            $scope.$watch('emailBody', function(body) {
                if (body) {
                    $scope.previewText = EmailParser.parse(body, {
                        to: $scope.to
                    });
                }
            });
        }]);
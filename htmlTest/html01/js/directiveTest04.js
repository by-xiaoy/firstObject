//ng-readonly
// angular.module('myApp', [])
//     .run(function($rootScope, $timeout) {
//         $rootScope.isDisabled = true;
//         $timeout(function() {
//             $rootScope.isDisabled = false;
//         }, 5000);
//     });

//ng-href
// angular.module('myApp', [])
//     .run(function($rootScope, $timeout) {
//         $timeout(function() {
//             $rootScope.myHref = 'http://google.com';
//         }, 2000);
//     });
//ng-src
angular.module('myApp', [])
    .run(function($rootScope, $timeout) {
        $timeout(function() {
            $rootScope.imgSrc = 'https://www.google.com/images/srpr/logo11w.png';
        }, 2000);
    });
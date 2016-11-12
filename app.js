(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', checkMeal);
    checkMeal.$inject = ['$scope'];

    function checkMeal($scope) {
        $scope.result = "";
        $scope.test = function () {
            var words = $scope.numberWords;
            if (words !== undefined) {
                var resultArr = words.split(',');
                if (resultArr.length > 3) {
                    $scope.result = "Too much!"
                }
                else {
                    $scope.result = "Enjoy!"
                }
            }
            else {
                $scope.result = "Please enter data first"
            }
            if ($scope.numberWords == "") {
                $scope.result = "Please enter data first";
            }
        }
    }
})();
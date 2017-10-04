angular.module('netpresenter').controller('settingsCtrl', ['$scope', '$uibModalInstance', '$http', function($scope, $uibModalInstance, $http) {

    $scope.optionsList = [];

    $scope.ok = function() {
        $uibModalInstance.close($scope.selectedList);
    };

    $scope.cancel = function() {
        $uibModalInstance.close();
    };

    $http.get('/channels').then(function(response) {
        $scope.optionsList = response.data;
    });

}]);
angular.module('netpresenter').controller('settingsCtrl', ['$scope', '$uibModalInstance', '$http', 'selected', function($scope, $uibModalInstance, $http, selected) {

    $scope.optionsList = [];
    $scope.selectedList = selected;

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
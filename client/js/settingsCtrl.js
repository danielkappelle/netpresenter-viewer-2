angular.module('netpresenter').controller('settingsCtrl', ['$scope', '$uibModalInstance', function($scope, $uibModalInstance) {
    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.close();
    };
}]);
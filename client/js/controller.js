angular.module('netpresenter', ['ui.bootstrap'])
  .controller('NetpresenterController', ['$scope', '$http', '$timeout', '$uibModal', function($scope, $http, $timeout, $uibModal) {
    $scope.url = 'http://netpresenter.tudelft.nl/netpresenter/published/ETV_computers/channel/PC/';
    // $scope.url = 'http://netpresenter.tudelft.nl/netpresenter/published/3mE_algemeen/channel/PC/';
    $scope.currentSlide = 0;
    $scope.timeOut = 1 * 60 * 60 * 1000; // 1 hour intervals

    $scope.openSettings = function() {
      console.log('open settings');

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '../settings-modal.html',
        controller: 'settingsCtrl',
        size: 'lg'
      });
    };

    var update = function() {
      $http.get('/slides', {params: {url: $scope.url}})
        .then(function(response) {
          $scope.slides = response.data;
          n_slides = $scope.slides.length;
          if(typeof slide_timer !== "undefined") {
            $timeout.cancel(slide_timer);
          }
          $scope.currentSlide = 0;
          startShow();
        }, function(err) {
          console.log(err);
        });

        update_timer = $timeout(update, $scope.timeOut);
    };

    var startShow = function() {
      $scope.currentSlide = ($scope.currentSlide + 1) % n_slides;
      slide_timer = $timeout(startShow, $scope.slides[$scope.currentSlide].interval * 1000);
    };

    update();

  }]);

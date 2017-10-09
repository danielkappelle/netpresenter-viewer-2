angular.module('netpresenter', ['ui.bootstrap', 'multipleSelect'])
  .controller('NetpresenterController', ['$scope', '$http', '$timeout', '$uibModal', function($scope, $http, $timeout, $uibModal) {
    $scope.url = 'http://netpresenter.tudelft.nl/netpresenter/published/';
    $scope.currentSlide = 0;
    $scope.timeOut = 1 * 60 * 60 * 1000; // 1 hour intervals

    /* Default channel */
    $scope.channels = ['ETV_computers'];

    $scope.openSettings = function() {
      console.log('open settings');

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: '../settings-modal.html',
        controller: 'settingsCtrl',
        size: 'lg',
        resolve: {
          selected: function() {
              return $scope.channels;
          }
       }
      });

      modalInstance.result.then(function(result) {
        if(result) {
          $scope.channels = result;
          $timeout.cancel(update_timer);
          update();
        }
      });
    };

    var update = function() {
      console.log('update start');
      $http.get('/slides', {params: {channels: JSON.stringify($scope.channels)}})
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

    var mouseTimer = null;
    $scope.cursorVisible = true;

    function disappearCursor() {
      mouseTimer = null;
      document.body.style.cursor = "none";
      $scope.cursorVisible = false;
      $scope.$apply();
    }

    document.onmousemove = function() {
      if(mouseTimer) {
        window.clearTimeout(mouseTimer);
      }

      if(!$scope.cursorVisible) {
        document.body.style.cursor = "default";
        $scope.cursorVisible = true;
        $scope.$apply();
      }

      mouseTimer = window.setTimeout(disappearCursor, 2000);
    };

  }]);

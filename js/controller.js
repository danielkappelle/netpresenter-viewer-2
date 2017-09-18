angular.module('netpresenter', [])
  .controller('NetpresenterController', function($scope, $http, $timeout) {
    $scope.url = 'http://netpresenter.tudelft.nl/netpresenter/published/ETV_computers/channel/PC/';
    // $scope.url = 'http://netpresenter.tudelft.nl/netpresenter/published/3mE_algemeen/channel/PC/';
    $scope.currentSlide = 0;
    $scope.timeOut = 5000;

    $http.get('php/api.php', {params: {url: $scope.url}})
        .then(function(response) {
          $scope.slides = response.data;
          n_slides = $scope.slides.length;
          startShow();
        }, function(err) {
          console.log(err);
        });

    var startShow = function() {
      $scope.currentSlide = ($scope.currentSlide + 1) % n_slides;
      $timeout(startShow, $scope.timeOut);
    }

  });

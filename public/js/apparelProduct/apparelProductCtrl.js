angular.module("goApp")
    .controller('apparelProductCtrl', function($scope, apparelProductService, $stateParams, $timeout) { //might not need ngAnimate

        var id = $stateParams.id;
        var gender = $stateParams.gender;
        $scope.cartId = 0;
        $scope.prodid = 0;
        $scope.size = 0;
        $scope.count = 1;
        $scope.thumbs = [];
        $scope.selected = 3;

        $scope.productImg = {};
        $timeout(function() {}, 100)
            //originally tried passing params through function(), but params passed through fn have to be placeholder so instead passed through line 20
        $scope.getProduct = function() { //this fn automatically invokes because we need the obect on page load
            apparelProductService.getProduct($stateParams.id, $stateParams.gender).then(function(response) { //we're able to pass $stateParams through this fn's params
                $scope.product = response[0]; //save the response on scope, after figuring out what the pathways is via console log
                $scope.productImg = response[0].img_url;
            })
        };
        $scope.getProduct();

        $scope.imgSwitch = function(theImage) { //this function is setting url to selectedImage
            $scope.selectedImage = theImage;
        }

        $scope.getThumbs = function() {
            apparelProductService.getThumbs($stateParams.id, $stateParams.gender).then(function(response) {
                $scope.images = response;
                for (var i = 0; i < response.length; i++) {
                    $scope.thumbs.push(response[i].img_url)
                }
                $scope.selectedImage = $scope.thumbs[0];
                console.log("this is $scope.thumbs", $scope.thumbs); //always console log your response
            })
        };
        $scope.getThumbs();

        $scope.getColorSwatches = function() {
            apparelProductService.getColorSwatches($stateParams.id).then(function(response) {
                $scope.colorSwatches = response;
                console.log("work with", $scope.colorSwatches);
            })
        };
        $scope.getColorSwatches();

        $scope.colorImageSelect = function(colorValue) { //finding the matching view and setting the image, $index
          $scope.selected = colorValue;
          if(colorValue === 0) {}
          else {
            colorValue = 2;
          }
            for (var i = 0; i < $scope.images.length; i++) {
                if ($scope.images[i].img_url === $scope.images[colorValue].img_url) {
                    $scope.prodid = $scope.images[colorValue].id;
                    $scope.cartId = $scope.images[colorValue].product_id;
                    console.log($scope.cartId);
                    console.log($scope.images);
                    $scope.selectedImage = $scope.images[i].img_url;
                    return;
                }
            }
        }

    });

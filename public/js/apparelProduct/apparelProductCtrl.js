angular.module("goApp")
    .controller('apparelProductCtrl', function($scope, apparelProductService, $stateParams) { //might not need ngAnimate
        $scope.test = "apparel products CTRL works"
        console.log($stateParams.id, $stateParams.gender);
        //product title
        $scop.title = title;
        // Temporary Photos
        $scope.photos = [{
                src: 'http://demandware.edgesuite.net/aasj_prd/on/demandware.static/-/Sites-gopro-products/default/dw796dc8b1/thumbnails/InsulatedJacket_Men_thumbnail_LP.jpg',
                desc: 'view1'
            }, {
                src: 'http://demandware.edgesuite.net/aasj_prd/on/demandware.static/-/Sites-gopro-products/default/dw92894cf2/hi-res/Apparel_InsulatedJacket_men_PDP_2.jpg',
                desc: 'view2'
            }, {
                src: 'http://demandware.edgesuite.net/aasj_prd/on/demandware.static/-/Sites-gopro-products/default/dw9694eed5/hi-res/Apparel_InsulatedJacket_men_PDP_3.jpg',
                desc: 'view3'
            }, {
                src: 'http://demandware.edgesuite.net/aasj_prd/on/demandware.static/-/Sites-gopro-products/default/dw81486695/hi-res/Apparel_InsulatedJacket_men_PDP_4.jpg',
                desc: 'view4'
            }

        ];
        // First image
        $scope._Index = 0;
        // If current image is the same as requested image
        $scope.isActive = function(index) {
            return $scope._Index === index;
        };
        // Show previous image
        $scope.showPrev = function() {
            $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
        };
        // Show next image
        $scope.showNext = function() {
            $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
        };
        // Show a specific image
        $scope.showPhoto = function(index) {
            $scope._Index = index;
        }

    });

angular.module("goApp")
    .controller('apparelProductCtrl', function($scope, apparelProductService) { //might not need ngAnimate
        // $scope.test1 = "apparel products CTRL works";

        //product title
        // $scope.title = "title";
        // Temporary Photos
        // $scope.photos = [{
        //         src: 'http://demandware.edgesuite.net/aasj_prd/on/demandware.static/-/Sites-gopro-products/default/dw796dc8b1/thumbnails/InsulatedJacket_Men_thumbnail_LP.jpg',
        //         desc: 'view1'
        //     }, {
        //         src: 'http://demandware.edgesuite.net/aasj_prd/on/demandware.static/-/Sites-gopro-products/default/dw92894cf2/hi-res/Apparel_InsulatedJacket_men_PDP_2.jpg',
        //         desc: 'view2'
        //     }, {
        //         src: 'http://demandware.edgesuite.net/aasj_prd/on/demandware.static/-/Sites-gopro-products/default/dw9694eed5/hi-res/Apparel_InsulatedJacket_men_PDP_3.jpg',
        //         desc: 'view3'
        //     }, {
        //         src: 'http://demandware.edgesuite.net/aasj_prd/on/demandware.static/-/Sites-gopro-products/default/dw81486695/hi-res/Apparel_InsulatedJacket_men_PDP_4.jpg',
        //         desc: 'view4'
        //     }
        //
        // ];

        $scope.dummyData = {
            img: ['http://demandware.edgesuite.net/aasj_prd/on/demandware.static/-/Sites-gopro-products/default/dw796dc8b1/thumbnails/InsulatedJacket_Men_thumbnail_LP.jpg', 'http://demandware.edgesuite.net/aasj_prd/on/demandware.static/-/Sites-gopro-products/default/dw92894cf2/hi-res/Apparel_InsulatedJacket_men_PDP_2.jpg', 'http://demandware.edgesuite.net/aasj_prd/on/demandware.static/-/Sites-gopro-products/default/dw9694eed5/hi-res/Apparel_InsulatedJacket_men_PDP_3.jpg', 'http://demandware.edgesuite.net/aasj_prd/on/demandware.static/-/Sites-gopro-products/default/dw81486695/hi-res/Apparel_InsulatedJacket_men_PDP_4.jpg'],
            count: 1,
            title: 'Insulated Jacket',
            price: 199.99,
            desc: 'The Insulated Jacket is a limited edition GoPro/686 GLCR Avenue Down Jacket. It’s made of water resistant DWR (that stands for durable water repellant) coated cire fabric throughout the body, waterproof infiDRY® 20K fabric on the shoulders and hood and 600 Powerfill Down Insulation. Also equipped with a custom inner chest pocket (for your GoPro or your phone), a front hood adjustment, bottom hem drawcord adjustment and an audio cord outlet.',
            colors: ['']
        };

        // initial image index
        $scope.slectedImage = $scope.dummyData.img[0];



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

angular.module("goApp")
    .controller('apparelProductCtrl', function($scope, apparelProductService, $stateParams, $timeout) { //might not need ngAnimate

        var id = $stateParams.id;
        var gender = $stateParams.gender;
        console.log(id + " " + gender);
        $scope.thumbs = [];

        $scope.productImg = {};
        $timeout(function() {
                console.log($scope.productImg + " we've got this");
            }, 100)
            //originally tried passing params through function(), but params passed through fn have to be placeholder so instead passed through line 20
        $scope.getProduct = function() { //this fn automatically invokes because we need the obect on page load
                apparelProductService.getProduct($stateParams.id, $stateParams.gender).then(function(response) { //we're able to pass $stateParams through this fn's params
                    $scope.product = response[0]; //save the response on scope, after figuring out what the pathways is via console log
                    $scope.productImg = response[0].img_url;
                    console.log($scope.productImg + " I AM IMAGE");
                })
            }() //<-- () automatically invokes

        $scope.imgSwitch = function(theImage) {
            console.log("TURKEY");
            console.log(theImage);
        }

        $scope.getThumbs = function() {
            apparelProductService.getThumbs($stateParams.id, $stateParams.gender).then(function(response) {
                for (var i = 0; i < response.length; i++) {
                    $scope.thumbs.push(response[i].img_url)
                }
                $scope.selectedImage = $scope.thumbs[0];
                // console.log("this is response", response);
                console.log("this is $scope.thumbs", $scope.thumbs); //always console log your response
            })
        }()

    });

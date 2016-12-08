angular.module("goApp").controller('checkoutCtrl', function($scope, checkoutService, stripe, $state) {
   $scope.stepOneFinished = false;
   $scope.stepTwoFinished = false;
   $scope.stepTwoActive = false;
   $scope.deliveryAddress = {};
   $scope.billingAddress = {};
   $scope.payment = {};


   $scope.clearStepOne = function(same) {
      $scope.stepOneFinished = true;
       var deliveryForm = document.getElementById("delivery_address");
       var billingForm = document.getElementById("shipping_address");

       for (var i = 0; i < deliveryForm.length; i++) {
         $scope.deliveryAddress[deliveryForm.elements[i].name] = deliveryForm.elements[i].value;
       }

       console.log($scope.deliveryAddress);

       if (same === true) {
          for (var i = 0; i < deliveryForm.length; i++) {
            billingForm[i].value = deliveryForm[i].value;
         }
         $scope.clearStepTwo();
         return;
       }
       $scope.stepTwoActive = true;
   }

   $scope.clearStepTwo = function() {
      $scope.stepTwoFinished = true;
      var billingForm = document.getElementById("shipping_address");

      for (var i = 0; i < billingForm.length; i++) {
        $scope.billingAddress[billingForm.elements[i].name] = billingForm.elements[i].value;
      }
      $scope.stepTwoActive = false;
   }

   $scope.editOne = function() {
      $scope.stepOneFinished = false;
      $scope.stepTwoFinished = false;
      $scope.stepTwoActive = false;
   }

   $scope.editTwo = function() {
      $scope.stepOneFinished = true;
      $scope.stepTwoFinished = false;
      $scope.stepTwoActive = true;
   }

$scope.payment = {};

$scope.charge = function () {
 return stripe.card.createToken($scope.payment.card)
 .then(function (response) {
    var payment = angular.copy($scope.payment);
    payment.card = void 0;
    payment.token = response.id;
    checkoutService.processPayment($scope.total * 100, payment);
 })
 .then(function(payment) {
    swal({
     title: "Thank You!",
     text: "Your order will be shipped within 3 business days.",
     imageUrl: "http://www.sv411.com/wp-content/uploads/GoPro-Logo.jpg",
     confirmButtonText: "Continue exporing GoBro"
    })
    $scope.zeroOut();
    $state.go('home');
 })
 .catch(function (err) {
     if (err.type && /^Stripe/.test(err.type)) {
      console.log('Stripe error: ', err.message);
     }
     else {
      console.log('Other error occurred, possibly with your API', err.message);
     }
   });
};

});

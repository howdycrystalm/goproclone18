angular.module("goApp").controller('checkoutCtrl', function($scope, checkoutService) {
   $scope.stepOneFinished = false;
   $scope.stepTwoFinished = false;
   $scope.stepTwoActive = false;
   $scope.deliveryAddress = {};
   $scope.billingAddress = {};

   $scope.clearStepOne = function(same) {
      $scope.stepOneFinished = true;
       var deliveryForm = document.getElementById("delivery_address");
       var billingForm = document.getElementById("shipping_address");

       for (var i = 0; i < deliveryForm.length; i++) {
         $scope.deliveryAddress[deliveryForm.elements[i].name] = deliveryForm.elements[i].value;
       }

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

   $scope.stripe = function() {

   }
});

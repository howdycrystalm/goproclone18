angular.module('goApp').controller('homeCtrl', function($scope) {
  $scope.test = 'Home CTRL works';
  $scope.currentState = 'home';
  $scope.showVid = false;

  swal({
    title: 'Welcome to FauxPro',
    text:
      "Our team of three cloned GoPro.com to show we can adhere to design comps and implement a live shopping cart. Features include: responsive and mobile-friendly landing and Cameras page, add-to-cart buttons, and checkout functionality. Be warned, it is entirely possible you can give us your money by completing the checkout process, but you ain't gonna be getting any product. It's best not to do it :)",
    confirmButtonText: 'Enjoy!',
    confirmButtonColor: '#005dac'
  });
});

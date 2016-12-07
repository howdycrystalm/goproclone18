// INITILIZE SERVICE
// ============================================================
angular.module('goApp')
    .service('apparelProductService', function($http) {

        // CRUD FUNCTIONS
        // ============================================================

       this.getProduct = function(id, gender) {
            return $http({
                method: 'GET',
                url: '/getProduct/:id/:gender',
            }).then(function(response) {
                return response;
            });
        };

    });

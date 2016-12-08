// INITILIZE SERVICE
// ============================================================
angular.module('goApp')
    .service('apparelProductService', function($http) {

        // CRUD FUNCTIONS
        // ============================================================

        this.getProduct = function(id, gender) {
            //logic
            return $http({
                method: 'GET',
                url: '/api/getProduct/' + id + "/" + gender
            }).then(function(response) {
                //logic
                return response.data;
            });

        };
        this.getThumbs = function(id, gender) {
            //logic
            return $http({
                method: 'GET',
                url: '/api/getThumbs/' + id + "/" + gender
            }).then(function(response) {
                //logic
                return response.data;
            });

        };

    });

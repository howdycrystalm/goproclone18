// INITILIZE SERVICE
// ============================================================
angular.module('goApp')
    .service('apparelProductService', function($http) {

        // CRUD FUNCTIONS
        // ============================================================

        this.getProduct = function(id) {
            //logic
            return $http({
                method: 'GET',
                url: '/api/getProduct/' + id
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
        this.getColorSwatches = function(id) {
            return $http({
                method: 'GET',
                url: '/api/getColorSwatches/' + id
            }).then(function(response) {
                return response.data;
            });
        };

    });

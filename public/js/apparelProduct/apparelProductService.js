// INITILIZE SERVICE
// ============================================================
angular.module('goApp')
    .service('apparelProductService', function($http) {

        // CRUD FUNCTIONS
        // ============================================================


        //***********adding dots to image of map in edit view***********//
        this.title = function() {
            return $http({
                method: 'GET',
                url: '/title',
                //data: checkpoints
            }).then(function(response) {
                return response.data;
            });
        };

    });

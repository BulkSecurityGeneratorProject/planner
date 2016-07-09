(function() {
    'use strict';

    angular
        .module('plannerApp')
        .controller('ProductDetailController', ProductDetailController);

    ProductDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'entity', 'Product'];

    function ProductDetailController($scope, $rootScope, $stateParams, entity, Product) {
        var vm = this;

        vm.product = entity;

        var unsubscribe = $rootScope.$on('plannerApp:productUpdate', function(event, result) {
            vm.product = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();

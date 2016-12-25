app.controller('CraftsController', function ($scope, craftsService) {
    init();
    function init() {
        $scope.crafts = craftsService.getCrafts();
    }
});

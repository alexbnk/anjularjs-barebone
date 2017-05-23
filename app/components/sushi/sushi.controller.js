app.controller('itemsController', function($scope, $stateParams, $state, sushiFactory, globalFactory) {

    var title = $state.current.name
    $scope.title = title.toUpperCase()


    sushiFactory.getItems()
        .then(function(items) {
            $scope.items = items;
        });

    $scope.currentItem = $stateParams.param;

    $scope.getItem = function(id) {
    sushiFactory.getItem(id)
        .then(function(item) {
            $scope.oneItem = item;
        });

    $scope.log = function(input) {
        console.log(input);

    }
}


});

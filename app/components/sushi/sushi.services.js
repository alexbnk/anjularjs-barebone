app.factory('sushiFactory', function($http) {

    var thisFactory = {};

    thisFactory.getItems = function() {

        return $http.get('/api/sushi/')
            .then(function(response) {

                return response.data;

            }, function(err) {
                //console.error(err);
            });

    };
    thisFactory.getItem = function(id) {
        console.log("getItem:"+ id)
        return $http.get('/api/sushi/'+id)

            .then(function(response) {
              // console.log(response.data);
                //play with data
                //console.log(response.data);
                return response.data;

            }, function(err) {
                //console.error(err);
            });

    };








     return thisFactory;


    })


app.factory('globalFactory', function($http) {

    var thisFactory = {};

    thisFactory.appName ="Brand";
    thisFactory.homestate = 'home';
    thisFactory.menuItems = [

            {
                ENmenu: 'Sushi',
                ENmenustate: 'sushi'
            },
            {
                ENmenu: 'Meat',
                ENmenustate: 'meat'
            },
            {
                ENmenu: 'Cars',
                ENmenustate: 'cars'
            },

        ];

    thisFactory.currentUser = {
      name: 'user',
      email: 'user@domain.com',
      role: 'admin',
      org: 1001

    };



 return thisFactory;


})

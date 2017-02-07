app.service('myService', function($http) {
    var service = {};
    service.getCustomers = function() {
         return $http.get('data/customers.json');
    }
    return service;
});


app.controller('myController', function($scope, $http, myService) {
    var cus = new customer();
    $scope.customer = cus;
    $scope.customers = [];

    $scope.addCustomer = function(customer) {
        console.log(customer);
    }

    myService.getCustomers().success(function(data){
        $scope.customers = data;
    });

    $scope.viewCustomer = function(customer) {
        customer.state = "view";
        $scope.customer = customer;
    }

    $scope.editCustomer = function(customer) {
        customer.state = "edit";
        $scope.customer = customer;
    }

    $scope.newCustomer = function(customer) {
        $scope.customer = {};
    }
});




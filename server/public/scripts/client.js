var app = angular.module('EmployeeApp', []);

//EmployeeFS Controller
app.controller('EmployeeController', ['$http', function ($http) {
    console.log('EmployeeController loaded');
    var self = this;
    self.employees = [];

    self.getEmployees = function() {
        $http({
            method: 'GET',
            url: '/employee'
        }).then(function (response){
            console.log(response);
            console.log(response.data);
            self.employees = response.data;
        })//end GET success
    };//end getEmployees()

    self.createNewEmployee = function(){
        $http({
            method: 'POST',
            url: '/employee',
            data: self.newEmployee
        }).then(function(response){
            console.log(response);
            self.getEmployees
        })//end POST success
    };//end createNewEmployee()

    self.getEmployees();


    
}]);//End of EmployeeFS controller
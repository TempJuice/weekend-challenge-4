//Set angular global var
var app = angular.module('EmployeeApp', []);

//Employee Controller
app.controller('EmployeeController', ['$http', function ($http) {

    //Establish self
    var self = this;

    //Array for employee objects
    self.employees = [];

    //GET employee table from DB
    self.getEmployees = function() {
        $http({
            method: 'GET',
            url: '/employee'
        }).then(function (response){
            self.employees = response.data;
        })//end GET success
    };//end getEmployees()

    //POST new employee to DB
    self.createNewEmployee = function(){
        $http({
            method: 'POST',
            url: '/employee',
            data: self.newEmployee
        }).then(function(response){
            self.newEmployee = {};
            self.getEmployees();
            self.getMonthly();
        })//end POST success
    };//end createNewEmployee()

    //GET monthly avg from DB        
    self.getMonthly = function() {
        $http({
            method: 'GET',
            url: '/monthly'
        }).then(function (response){
            self.average = response.data[0];
        })//end GET success
    };//end getMonthly()

    //Display employees and monthly expenditures on DOM ready
    self.getEmployees();
    self.getMonthly();
  
}]);//End of Employee controller
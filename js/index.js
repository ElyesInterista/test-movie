var app = angular.module('app', []);

app.controller('MainCtrl', function($scope) {
$scope.movie={
	title:"",duration:0,actors:"",director:""
};
$scope.duration={hours:0,minutes:0};
  $scope.orderByField = 'title';
  $scope.reverseSort = false;
  
  $scope.data = 
     [
    {title:'The Godfather',duration: '150',actors:'Marlon Brando , Al Pacino',director:'Francis Ford Coppola'},
    {title:'Citizen Kane',duration:'130',actors:'Orson Welles , Joseph Cotton',director:'Orson Welles '},
    {title:'Pulp Fiction',duration:'155',actors:'Uma Thurman , John Travolta',director:'Quentin Tarantino'},
    {title:'Angry Men',duration:'120',actors:'Henry Fonda , Lee J. Cobb ',director:' Sidney Lumet'}]
     ;


$scope.AddNew = function(movie) {

$scope.movie.duration =  $scope.duration.hours*60+ $scope.duration.minutes;
    $scope.data.push(movie);
  $('#myModal').modal('hide');
}



});
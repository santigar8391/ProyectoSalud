'use strict';

angular.module('proyectoSaludApp')
  .controller('ProductoCtrl', function ($scope, $http) {
    $http.get('/api/producto').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      $scope.awesomeThings = ([{a:'aa', b:'bb', c:'cc'}, {a:'aa', b:'bb', c:'cc'}, {a:'aa', b:'bb', c:cc}]);
    });
    $scope.gridOptions = {
      data: 'awesomeThings',
      showGroupPanel: true,
      jqueryUITheme: true,
      columnDefs: [
        {field: 'id_producto', displayName: 'Id'},
        {field: 'desc_producto', displayName: 'Descripcion'},
        {field: 'num_grupo', displayName: 'Grupo'}
    ]
    };
  	/*
  	$scope.mostrarProducto = function(){
        $http.get('/producto')
            .success(function(datos) {
                $scope.datoCiclo = datos;
                //$scope.mostrarGrupo();
            }).error(function (datos) {
                console.log('Error: ' + datos);
            });

    }*/

  });

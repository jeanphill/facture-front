
var app = angular.module("myapp", []);
app.controller("ListController", ['$scope', function($scope) {
  $scope.produits = [
    {
      'nom':'Orange',
      'prix': 3.5,
    },
    {
      'nom':'Ananas',
      'prix': 4.0,
    },
    {
      'nom':'Lait',
      'prix':5.7,
    }];

  $scope.addNew = function(produit){
    $scope.produits.push({
      'nom': "",
      'prix': "",
    });
  };

  $scope.remove = function(){
    var newDataList=[];
    $scope.selectedAll = false;
    angular.forEach($scope.produits, function(selected){
      if(!selected.selected){
        newDataList.push(selected);
      }
    });
    $scope.produits = newDataList;
  };

  $scope.checkAll = function () {
    if (!$scope.selectedAll) {
      $scope.selectedAll = true;
    } else {
      $scope.selectedAll = false;
    }
    angular.forEach($scope.produits, function(produit) {
      produit.selected = $scope.selectedAll;
    });
  };
  $scope.getTotal = function () {
    var total = 0;
    for (var i=0; i < $scope.produits.length; i++)
    {
      var prod = $scope.produits[i];
      total += prod.prix;
    }
    return total;
  }
  $scope.$watch($scope.getTotal() );
}]);

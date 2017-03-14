angular.module("app").controller("cadastroCtrl", ($scope, Empresa) => {

	$scope.empresa = new Empresa();

	$scope.salvar = function () {
		$scope.empresa.create(response => {
			console.log(response);
		})
	}
});
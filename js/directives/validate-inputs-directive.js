angular
    .module("app")
        .directive("validateCnpj", function (validateInputs) {
            return {
                require: 'ngModel',
                link: function($scope, $element, $attrs, ngModel) {
                    $scope.$watch($attrs.ngModel, function(value) {
                        if (value === null || value === undefined || value === "") return;
                        var isValid = validateInputs.cnpj(value);
                        ngModel.$setValidity($attrs.ngModel, isValid);
                    });
                }
            } 
        });
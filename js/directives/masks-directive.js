angular
    .module("app")
        .directive("maskCnpj", () => {
            return {
                link : function(scope, element, attrs) {
                    $(element).mask('00.000.000/0000-00');
                }
            }
        });
angular.module("app").factory("Empresa", () => {
	var Empresa = function () {

		this.nome = null;
		this.cnpj = null;
		this.endereco = null;
		this.estado = null;
		this.cidade = null;
		this.data_criacao = null;

		this.create = function (callback) {
			(callback || angular.noop)({
				nome: this.nome,
				cnpj: this.cnpj,
				endereco: this.endereco,
				estado: this.estado,
				cidade: this.cidade,
				data_criacao: this.data_criacao
			});
		};
		this.update = function (callback) {

		};
		this.delete = function (callback) {

		};
	}

	Empresa.getEmpresas = function (callback) {

	}

	return Empresa;
});
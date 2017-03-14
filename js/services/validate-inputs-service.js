angular
	.module("app")
		.service("validateInputs", function () {
			
			this.cnpj = function(cnpj) {
				cnpj = cnpj.replace(/\./g, "");
				cnpj = cnpj.replace(/\-/g, "");
				cnpj = cnpj.replace(/\_/g, "");
				cnpj = cnpj.replace(/\//g, "");

				if(cnpj.length!=14)
					var result = false;

				pri = eval(cnpj.substring(0,2));
				seg = eval(cnpj.substring(3,6));
				ter = eval(cnpj.substring(7,10));
				qua = eval(cnpj.substring(11,15));
				qui = eval(cnpj.substring(16,18));
				var i;
				var numero;
				var situacao = '';
				numero = (pri+seg+ter+qua+qui);
				s = numero;
				c = cnpj.substr(0,12);
				var dv = cnpj.substr(12,2);
				var d1 = 0;
				for (i = 0; i < 12; i++) 
					d1 += c.charAt(11-i)*(2+(i % 8));
				if (d1 == 0)
					var result = false;
				d1 = 11 - (d1 % 11);
				if (d1 > 9) 
					d1 = 0;
				if (dv.charAt(0) != d1)
					var result = false;
				d1 *= 2;
				for (i = 0; i < 12; i++)
					d1 += c.charAt(11-i)*(2+((i+1) % 8));
				d1 = 11 - (d1 % 11);
				if (d1 > 9) 
					d1 = 0;
				if (dv.charAt(1) != d1)
					var result = false;
				if (result == false) 
					return false;
				else
					return true;
			};
		});
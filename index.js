import { Cliente } from "./Cliente.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor1 = new Diretor('Fenando', 12312312345, 10000);
diretor1.cadastrarSenha('12345');
const gerente1 = new Gerente('Amanda', 45645645698, 5000);
gerente1.cadastrarSenha('4545');
const cliente1 = new Cliente('Fernanda', 99977766622, '1515');

const diretor1Logado = SistemaAutenticacao.login(diretor1, '12345');
const gerente1Logado = SistemaAutenticacao.login(gerente1, '4545');
const cliente1Logado = SistemaAutenticacao.login(cliente1, '1515');

console.log("Diretor1 logado: " + diretor1Logado);
console.log("Gerente1 logado: " + gerente1Logado);
console.log("Cliente1 logado: " + cliente1Logado);

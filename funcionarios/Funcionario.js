// Classe abstrata
export class Funcionario {

    constructor(nome, cpf, salario) {
        if(this.constructor == Funcionario) {
            throw new Error('Você não pode instanciar um objeto do tipo Fuincionario, pois é uma classe abstrata!');
        }

        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
        this._bonificacao = 1;
        this._senha;
    }

    // Métodos Especias

    autenticar(senha) {
        return senha == this._senha;
    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }

    // Métodos Assessores

    set nome(nome) {
        this._nome = nome;
    }
    get nome() {
        return this._nome;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }

    set salario(salario) {
        this._salario = salario;
    }
    get salario() {
        return this._salario;
    }

    set bonificacao(bonificacao) {
        this._bonificacao = bonificacao;
    }
    get bonificacao() {
        return this._bonificacao;
    }

    set senha(senha) {
        this._senha = senha;
    }
    get senha() {
        return this._senha;
    }

}

export class Cliente {

    constructor(nome, cpf, senha) {
        this._nome = nome;
        this._cpf = cpf;
        this._senha = senha
    }

    autenticar() {
        return true;
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

}

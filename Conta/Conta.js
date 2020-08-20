// Classe abstrata
export class Conta {

    constructor(cliente, agencia) {
        if(this.constructor == Conta) {
            throw new Error('Você não pode instanciar um objeto do tipo Conta, pois é uma classe abstrata!');
        }

        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = 0;
    }

    // Métodos especiais

    // Método Abstrato - Deve ser sobrescrito nas classes filhas
    sacar(valor) {
        throw new Error('O método Sacar é um método abstrato');
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            console.log('Saque realizado no valor de R$ ' + valor + '.');
            console.log('Taxa de saque: R$ ' + (valorSacado - valor) + '.');
        } else {
            console.log('Saldo insuficiente :(');
        }
    }

    depositar(valor) {
        if(valor > 0) {
            this._saldo += valor;
            console.log('Deposito realizado com sucesso! Valor R$ ' + valor + '.');
        } else {
            console.log('O valor informado é inválido :(');
        }
    }

    transferir(valor, ContaCorrente) {
        if(valor > 0 && this._saldo >= valor) {
            console.log('Transferência realizada com sucesso! Valor R$ ' + valor + '.');
            this._saldo -= valor;
            ContaCorrente._saldo += valor;
        } else {
            console.log('O valor informado é inválido :(');
        }
    }

    // Métodos assessores

    set agencia(agencia) {
        this._agencia = agencia;
    }
    get agencia() {
        return this._agencia
    }

    set saldo(saldo) {
        this._saldo = saldo;
    }
    get saldo() {
        return this._saldo
    }

    set cliente(cliente) {
        if(cliente instanceof Cliente) {
            this._cliente = cliente;
        }
    }
    get cliente() {
        return this._cliente;
    }
    
}

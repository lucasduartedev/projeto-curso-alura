import { Conta } from './Conta.js';

export class ContaPoupanca extends Conta {

    constructor(cliente, agencia) {
        super(cliente, agencia);
    }

    sacar(valor) {
        const taxa = 1.02
        return this._sacar(valor, taxa);
    }

    // Métodos assessores

}

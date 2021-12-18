export class ContaCorrente {
    agencia;
    cliente;


    // #saldo = 0 #atributo privado
    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor && valor > 0) {
            this._saldo -= valor;
            return valor;
        };

    }
    depositar(valor) {
        if (valor <= 0) { return };
        this._saldo += valor;
    }

    transferir(valor, conta) {
        conta.cidade = "São Paulo";
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        valor = 20;
    }
}

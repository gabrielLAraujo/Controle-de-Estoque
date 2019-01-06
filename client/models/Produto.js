class Produto {
    constructor(embarcacao, codigoPrd, descricao, unidade, tipo, consumo, quantidadeMinima, quantidadeMaxima) {
        this._embarcacao = embarcacao;
        this._codigoPrd = codigoPrd;
        this._descricao = descricao;
        this._unidade = unidade;
        this._quantidadeMinima = quantidadeMinima;
        this._quantidadeMaxima = quantidadeMaxima;
        this._tipo = tipo;

        if (tipo.toUpperCase() == 'CONSUMIVEL') this._consumo = consumo

        else this._consumo = 'N/A';

        Object.freeze(this);
    }

    get embarcacao() {
        return this._embarcacao;
    }
    get codigoPrd() {
        return this._codigoPrd;
    }
    get descricao() {
        return this._descricao;
    }
    get unidade() {
        return this._unidade;
    }
    get tipo() {
        return this._tipo;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get consumo() {
        return this._consumo;
    }
    set consumo(consumo) {
        this._consumo = consumo;
    }
    get quantidadeMinima() {
        return this._quantidadeMinima;
    }
    set quantidadeMinima(quantidadeMinima) {
        this._quantidadeMinima = quantidadeMinima;
    }
    get quantidadeMaxima() {
        return this._quantidadeMaxima;
    }
    set quantidadeMaxima(quantidadeMaxima) {
        this._quantidadeMaxima = quantidadeMaxima;
    }

}
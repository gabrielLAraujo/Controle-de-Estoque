class PoolProdutos {
    constructor() {
        this._produtos = [];
    }
    adiciona(produto) {
        this._produtos.push(produto);
    }
    updatePool(produto, indice) {
        this._produtos[indice] = produto;
    }
    get produtos() {
        return [].concat(this._produtos);
    }
}
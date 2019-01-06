class PoolProdutos {
    constructor(updateView) {
        this._produtos = [];
        this._updateView = updateView;
        
    }
    
    adiciona(produto) {
        
        this._produtos.push(produto);
        this._updateView(this);
    }
    updatePool(produto, indice) {
        this._produtos[indice] = produto;
        this._updateView(this);
    }
    get produtos() {
        return [].concat(this._produtos);
    }
}
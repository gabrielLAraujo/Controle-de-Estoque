class ProdutoController {

    constructor() {
        this._inputEmbarcacao = $('#inputEmbarcacao');
        this._inputCodigoPrd = $('#inputCodigoPrd');
        this._inputDescricao = $('#inputDescricao');
        this._inputUnidade = $('#inputUnidade');
        this._inputConsumo = $('#inputConsumo');
        this._inputQuantidadeMinima = $('#inputQuantidadeMinima');
        this._inputQuantidadeMaxima = $('#inputQuantidadeMaxima');

        this._poolProdutos = new PoolProdutos(model =>
            this._produtosView.update(model)
        );
        this._produtosView = new ProdutosView($('#produtosView'));

        this._produtosView.update(this._poolProdutos);
    }

    adiciona(event) {
        event.preventDefault();
        let produto = this._criaProduto();
        this._poolProdutos.adiciona(produto);
        this._limpaFormulario();

    }
    updateLinha(indice) {
        let paramentros = $('.input_' + indice);
        let novoProduto = new Produto(

            paramentros[0].value,
            paramentros[1].value,
            paramentros[2].value,
            paramentros[3].value,
            paramentros[4].value,
            paramentros[5].value,
            paramentros[6].value,
            paramentros[7].value
        )



    }

    _limpaFormulario() {
        this._inputEmbarcacao.val('');
        this._inputCodigoPrd.val('');
        this._inputDescricao.val('');
        this._inputUnidade.val('');
        this._inputConsumo.val('');
        this._inputQuantidadeMaxima.val(0);
        this._inputQuantidadeMinima.val(0);

        this._inputEmbarcacao.focus();
    }
    _criaProduto() {
        $('.radios').each((index, element) => {
            if ($(element).is(':checked')) {

                this._inputTipo = $(element);
            }
        });
        return new Produto(
            this._inputEmbarcacao.val(),
            this._inputCodigoPrd.val(),
            this._inputDescricao.val(),
            this._inputUnidade.val(),
            this._inputTipo.val(),
            this._inputConsumo.val(),
            this._inputQuantidadeMinima.val(),
            this._inputQuantidadeMaxima.val()
        );
    }

}
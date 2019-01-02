class ProdutosView {

    constructor(element) {
        this._element = element;
    }
    _template(model) {
        return `<table class="table table-bordered  table-hover">
            <thead>
                <tr>
                    <th>Embarcação</th>
                    <th>CódigoPrd</th>
                    <th>Descrição</th>
                    <th>Unidade</th>
                    <th>Tipo</th>
                    <th>Consumo</th>
                    <th>Quantidade Minima</th>
                    <th>Quantidade Máxima</th>
                </tr>
            </thead>
            <tbody>

                ${
            model.produtos.map(n => {
                
                return `
                       <tr>
                            <td>${n.embarcacao}</td>
                            <td>${n.codigoPrd}</td>
                            <td>${n.descricao}</td>
                            <td>${n.unidade}</td>
                            <td>${n.quantidadeMinima}</td>
                            <td>${n.quantidadeMaxima}</td>
                            <td>${n.tipo}</td>
                            <td>${n.consumo}</td>                            
                        </tr>
                `
            }).join('')}        
        
                

            </tbody>
            <tfoot>
            </tfoot>
    </table>
    `;
    }
    update(model) {
        
        this._element.html(this._template(model));
    }
}
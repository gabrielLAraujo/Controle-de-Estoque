class ProdutosView {

    constructor(element) {
        this._element = element;
    }
    _template(model) {
        return `<table class="table table-bordered  table-hover">
            <thead>
                <tr>
                    <th scope="col">Embarcação</th>
                    <th scope="col">CódigoPrd</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Unidade</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Consumo</th>
                    <th scope="col">Quantidade Minima</th>
                    <th scope="col">Quantidade Máxima</th>                    
                </tr>
            </thead>
            <tbody>

                ${
            model.produtos.map((n,i) => {
                
                return `
                       <tr>
                            <td><input type="text" value="${n.embarcacao}" class="form-control input_${i}"></td>
                            <td><input type="text" value="${n.codigoPrd}" class="form-control input_${i}"></td>
                            <td class="col-xs-4"><textarea type="text" value="${n.descricao}" class="form-control input_${i}">${n.descricao}</textarea></td>
                            <td><input type="text" value="${n.unidade}" class="form-control input_${i}"></td>                            
                            <td><input class="form-control input_${i}" type="text" value="${n.tipo}" ></td>
                            <td><input type="text" value="${n.consumo}" class="form-control input_${i}"></td>
                            <td><input type="number" value="${n.quantidadeMinima}" class="form-control input_${i}"></td>
                            <td><input type="number" value="${n.quantidadeMaxima}" class="form-control input_${i}"></td>                  
                            <td>    
                                <button id="${i}" onclick="produtoController.updateLinha(this.id)" class="btn btn-primary">Update
                                </button>  
                            </td>                                    
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
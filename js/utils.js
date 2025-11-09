// funções utilitárias
const obterElemento = (id) => document.getElementById(id);
const formataMoeda = (valor) => valor.toFixed(2).replace('.',',');
//funções puras
export const valorNegativo = (valor) => valor < 0;

export const atualizarInterface = (gastosPorCategoria) => {
    const categorias = gastosPorCategoria.categorias;

    // cada item em categorias é uma instância de Categoria
    categorias.forEach((categoria) => {
        const elemento = obterElemento(categoria.nome);
        if (elemento) {
            elemento.textContent = `${categoria.nome}: R$ ${formataMoeda(categoria.valor)}`;
        }
    });

    const elementoTotal = obterElemento('Total');
    if (elementoTotal) {
        elementoTotal.textContent = `Total: R$ ${formataMoeda(gastosPorCategoria.obterTotal())}`;
    }
}
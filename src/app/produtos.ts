export interface IProduto {
    id: string;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque:number;
    imagem: string;
}
export interface IProdutoCarrinho extends IProduto{
    quantidade:number;
}


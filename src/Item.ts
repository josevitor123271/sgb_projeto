
interface Pesquisavel {
    pesquisar(termo: string): boolean;
}

abstract class Item implements Pesquisavel {
    constructor(public id:number, public titulo: string, public ano: number) {}
    abstract exibirDetalhes(): void;

    // Método de pesquisa padrão, usando o título
    pesquisar(termo: string): boolean {
        return this.titulo.toLowerCase().includes(termo.toLowerCase());
    }
}

export default Item;

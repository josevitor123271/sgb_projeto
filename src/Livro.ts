import Item from "./Item";

interface Pesquisavel {
    pesquisar(termo: string): boolean;
}

class Livro extends Item implements Pesquisavel {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        public autor: string,
        public editora: string,
        public numeroDePaginas: number
    ) {
        super(id, titulo, ano);
    }

    exibirDetalhes(): string {
        return `Livro: ${this.titulo} (${this.ano}) - ${this.autor} - ${this.editora} - ${this.numeroDePaginas} páginas`;
    }

    pesquisar(termo: string): boolean {
        termo = termo.toLowerCase();
        return (
            this.titulo.toLowerCase().includes(termo) ||
            this.autor.toLowerCase().includes(termo) ||
            this.editora.toLowerCase().includes(termo)
        );
    }
}

export default Livro;
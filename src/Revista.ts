import Item from "./Item";

interface Pesquisavel {
    pesquisar(termo: string): boolean;
}

class Revista extends Item implements Pesquisavel {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        public edicao: number,
        public periodicidade: string,
    ) {
        super(id, titulo, ano);
    }

    exibirDetalhes(): string {
        return `Revista: ${this.titulo} (${this.ano}) - Edição ${this.edicao} - ${this.periodicidade}`;
    }

    // Sobrescreve o método de pesquisa para incluir a periodicidade
    pesquisar(termo: string): boolean {
        termo = termo.toLowerCase();
        return (
            this.titulo.toLowerCase().includes(termo) ||
            this.periodicidade.toLowerCase().includes(termo)
        );
    }
}

export default Revista;
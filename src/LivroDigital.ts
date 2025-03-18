import Livro from "./Livro";

class LivroDigital extends Livro {
    constructor(
        id: number,
        titulo: string,
        ano: number,
        autor: string,
        editora: string,
        numeroDePaginas: number,
        public formato: string,
        public tamanhoMB: number,
        public linkDownload: string
    ) {
        super(id, titulo, ano, autor, editora, numeroDePaginas)
    }

    exibirDetalhes(): string {
        return (`
            Livro Digital: ${this.titulo} - (${this.ano})
            Autor: ${this.autor}
            Editora: ${this.editora}
            Páginas: ${this.numeroDePaginas}
            Formato: ${this.formato}
            Tamanho: ${this.tamanhoMB} MB
            Link para Download: ${this.linkDownload}`);
    }
}

export default LivroDigital;
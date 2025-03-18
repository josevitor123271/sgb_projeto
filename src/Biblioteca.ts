import Item from "./Item";

class Biblioteca {
    private itens: Item[] = [];

    adicionarItem(item: Item): void {
        this.itens.push(item);
    }

    // O método buscarItens utiliza o polimosrfismo para chamar o método pesquisar
    buscarItens(termo: string): Item[] {
        console.log("Itens na biblioteca:", this.itens); // Verifique o conteúdo da biblioteca
        return this.itens.filter(item => item.pesquisar(termo));
    }
}

export default Biblioteca;
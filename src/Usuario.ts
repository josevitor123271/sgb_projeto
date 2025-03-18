import Item from "./Item";

interface IUsuario {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    itensEmprestados: Item[];
    emprestarItem(item: Item | null | undefined): boolean;
    devolverItem(id: number): boolean;
}

class Usuario implements IUsuario {
    private _id: number;
    private _nome: string;
    private _email: string;
    private _telefone: string;
    private _itensEmprestados: Item[] = [];
    

    constructor(id: number, nome: string, email: string, telefone: string) {
        this._id = id;
        this._nome = nome;
        this._email = email;
        this._telefone = telefone;
    }

    // Getters e Setters
    get id(): number {
        return this._id;
    }

    get nome(): string {
        return this._nome;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Email Inválido. Por favor, insira um e-mail válido.");
        }

        this._email = email;
    }

    get telefone(): string {
        return this._telefone;
    }

    set telefone(telefone: string) {
        this._telefone = telefone;
    }

    get itensEmprestados(): Item[] {
        return this._itensEmprestados;
    }

    // Métodos
    emprestarItem(item: Item | null | undefined): boolean {

        if (!item) {
            console.log("Erro: Item inválido. Não pode ser emprestado.");
            return false;
        }

        if (this._itensEmprestados.find(emprestado => emprestado.id === item.id)) {
            console.log(`O item com ID ${item.id} já está emprestado.`);
            return false;
        }

        this.itensEmprestados.push(item);
        console.log(`Item com ID ${item.id} emprestado com sucesso.`);
        return true;
    }

    devolverItem(id: number): boolean {

        if (!id || isNaN(id)) {
            console.log("Erro: ID inválido. Forneça um número válido para devolver o item.");
            return false;
        }

        const index = this.itensEmprestados.findIndex(devolvido => devolvido.id === id);
        if (index === -1) {
            console.log(`O item com ID ${id} não foi encontrado nos itens emprestados.`);
            return false;
        }

        this.itensEmprestados.splice(index, 1);
        console.log(`Item com ID ${id} devolvido com sucesso.`);
        return true;
    }
}

export default Usuario;
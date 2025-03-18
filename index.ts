// Importando as classes
import Biblioteca from "./src/Biblioteca";
import Livro from "./src/Livro";
import LivroDigital from "./src/LivroDigital";
import Revista from "./src/Revista";
import Usuario from "./src/Usuario";

// Livros
const livro = new Livro(1, "O Senhor dos Anéis", 1954, "J.R.R. Tolkien", "Martins Fontes", 1200);
const livro2 = new Livro(2, "Código Limpo", 2008, "Robert C. Martin", "Alta Books", 425);
const livro3 = new Livro(3, "1984", 1949, "George Orwell", "Companhia das Letras", 328);
const livro4 = new Livro(4, "Dom Casmurro", 1899, "Machado de Assis", "Editora Garnier", 256);
const livro5 = new Livro(5, "Harry Potter e a Pedra Filosofal", 1997, "J.K. Rowling", "Rocco", 223);
const livro6 = new Livro(6, "A Arte da Guerra", 500, "Sun Tzu", "Editora Jardim dos Livros", 160);

// Revistas
const revista = new Revista(7, "Superinteressante", 1987, 1, "Mensal");
const revista2 = new Revista(8, "Veja", 1968, 1, "Semanal");
const revista3 = new Revista(9, "National Geographic", 1888, 1, "Mensal");
const revista4 = new Revista(10, "Time", 1923, 1, "Semanal");
const revista5 = new Revista(11, "Forbes", 1917, 1, "Quinzenal");
const revista6 = new Revista(12, "Science", 1880, 1, "Semanal");

// Exibindo detalhes dos Livros
console.log(livro.exibirDetalhes());
console.log(livro2.exibirDetalhes());
console.log(livro3.exibirDetalhes());
console.log(livro4.exibirDetalhes());
console.log(livro5.exibirDetalhes());
console.log(livro6.exibirDetalhes());

// Exibindo detalhes das Revistas
console.log(revista.exibirDetalhes());
console.log(revista2.exibirDetalhes());
console.log(revista3.exibirDetalhes());
console.log(revista4.exibirDetalhes());
console.log(revista5.exibirDetalhes());
console.log(revista6.exibirDetalhes());

// Criado Usuários
const usuario1 = new Usuario(1, "Maria Monalisa", "joao.silva@email.com", "11999999999");
const usuario2 = new Usuario(2, "Micael Dias", "maria.oliveira@email.com", "21988888888");
const usuario3 = new Usuario(3, "José Vitor", "jose.vitor@gmail.com", "3217777777");
const usuario4 = new Usuario(4, "Mylena Coelho", "mylena.coelho@gmail.com", "4215555555");
const usuario5 = new Usuario(5, "Adállya Oliveira", "adallya.oliveira@gmail.com", "1234444444");

// Emprestando Livros

// Usuário com mais de dois livros
usuario1.emprestarItem(livro5);
usuario1.emprestarItem(livro3);

usuario2.emprestarItem(livro6);
usuario3.emprestarItem(livro2);
usuario4.emprestarItem(livro4);
usuario5.emprestarItem(livro);

// Exibindo detalhes dos itens emprestados
console.log("Itens emprestados por Maria Monalisa: ", usuario1.itensEmprestados);
console.log("Itens emprestados por Micael Dias ", usuario2.itensEmprestados);
console.log("Itens emprestados por José Vitor ", usuario3.itensEmprestados);
console.log("Itens emprestados por Mylena Coelho ", usuario4.itensEmprestados);
console.log("Itens emprestados por Adállya Oliveira ", usuario5.itensEmprestados);

// Emprestando um item já emprestado
usuario1.emprestarItem(livro5);
usuario1.emprestarItem(livro4);

// Devolvendo os Itens
usuario1.devolverItem(5);
usuario1.devolverItem(4);

// Criando a Biblioteca
const biblioteca = new Biblioteca();

// Adicionando os livros
biblioteca.adicionarItem(livro);
biblioteca.adicionarItem(livro2);
biblioteca.adicionarItem(livro3);
biblioteca.adicionarItem(livro4);
biblioteca.adicionarItem(livro5);
biblioteca.adicionarItem(livro6);

// Adicionando as revistas
biblioteca.adicionarItem(revista);
biblioteca.adicionarItem(revista2);
biblioteca.adicionarItem(revista3);
biblioteca.adicionarItem(revista4);
biblioteca.adicionarItem(revista5);
biblioteca.adicionarItem(revista6);

// Buscando por termos de cada Itens
const resultados_livros = biblioteca.buscarItens("Time");
console.log("Resultados da busca por 'Time':", resultados_livros);

// const resultados_revistas = biblioteca.buscarItens("National");
// console.log("Resultados da busca por 'National':", resultados_revistas);

// Criando um Livro Digital
const livroDigita1l = new LivroDigital(13, "Harry Potter e a Pedra Filosofal", 2000, "J.K. Rowling", "Rocco", 264, "PDF", 4.5, "https://a.co/d/afXfHJc");
console.log(livroDigita1l.exibirDetalhes());

const livroDigita12 = new LivroDigital(13, "É Assim Que Acaba", 2018, "Colleen Hoover", "Galera", 368 , "PDF", 5.2, "https://a.co/d/gKWiQem");
console.log(livroDigita12.exibirDetalhes());
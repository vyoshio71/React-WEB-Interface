import { getQueroLerBooks } from "../../Utils/LocalStorageUtils";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { db } from "../../mocks/itens.mock";

const ListaDeLeitura = () => {
  const queroLerBooksIds = getQueroLerBooks();
  const queroLerBooks = db.filter((book) => queroLerBooksIds.includes(book.id));
  return (
    <div>
      <Header />
      <body className="body-container">
        <div>
          <h2 className="title">Lista de leitura</h2>
          {queroLerBooks.map((book) => (
            <div className="books-box" key={book.id}>
              <div className="img-style">
                <img className="book-image" src={book.imageUrl} />
              </div>
              <div className="description-details">
                <h1>{book.title}</h1>
                <h2>{book.autor}</h2>
                <h3>
                  <b>Genêro:</b>
                  {book.genero}
                </h3>
                <p>{book.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </body>
      <Footer />
    </div>
  );
};

export default ListaDeLeitura;

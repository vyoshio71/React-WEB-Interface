import { getJaLiBooks } from "../../Utils/LocalStorageUtils";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { db } from "../../mocks/itens.mock";
import "./index.scss";

const Lidos = () => {
  const jaLiBooksIds = getJaLiBooks();
  const jaLiBooks = db.filter((book) => jaLiBooksIds.includes(book.id));
  return (
    <div>
      <Header />
      <body className="body-container">
        <div className="book-content">
          <h2 className="title">Livros Lidos</h2>
          {jaLiBooks.map((book) => (
            <div className="books-box" key={book.id}>
              <div className="img-style">
                <img className="book-image" src={book.imageUrl} />
              </div>
              <div className="description-details">
                <h1>{book.title}</h1>
                <h2>{book.autor}</h2>
                <h3><b>Genêro:</b>{book.genero}</h3>
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

export default Lidos;

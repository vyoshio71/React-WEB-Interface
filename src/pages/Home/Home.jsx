import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { db } from "../../mocks/itens.mock";
import "./index.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import unidecode from "unidecode";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentBookIndex, setCurrentBookIndex] = useState(0);
  const [error, setError] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setError(null);
    if (!searchQuery.trim()) {
      setError("Digite algo para pesquisar.");
      setSearchResults([]);
      return;
    }

    setError(null);
    const queryWithoutAccents = unidecode(searchQuery.toLowerCase());

    const filteredBooks = db.filter(
      (book) =>
        unidecode(book.title.toLowerCase()).includes(queryWithoutAccents) ||
        unidecode(book.autor.toLowerCase()).includes(queryWithoutAccents) ||
        unidecode(book.genero.toLowerCase()).includes(queryWithoutAccents)
    );

    setSearchResults(filteredBooks);
    setCurrentBookIndex(0);

    if (filteredBooks.length === 0) {
      setError("Nenhum resultado encontrado.");
    }
  };

  const handleReadButton = () => {
    setModalType("read");
    setIsModalOpen(true);
  };

  const handleNotReadButton = () => {
    setModalType("notRead");
    setIsModalOpen(true);
  };

  return (
    <section className="home-content">
      <Header />

      <body className="body-container">
        <div className="body-content">
          <h1 className="home-title">Qual livro você quer conhecer hoje?</h1>
          <div className="box">
            <FontAwesomeIcon
              className="icon-search"
              icon={faMagnifyingGlass}
              style={{ color: "#000000" }}
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="button-box">
            <button onClick={handleSearch} className="button">
              Buscar
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>

        <div className="book-details">
          {searchResults.length > 0 && (
            <>
              <div className="book-header">
                <img
                  src={searchResults[currentBookIndex].imageUrl}
                  className="book-image"
                />
                <div className="buttons-style">
                  <button onClick={handleReadButton} className="button-read">
                    Já Li!
                  </button>
                  ;
                  <button
                    onClick={handleNotReadButton}
                    className="button-not-read"
                  >
                    Quero Ler!
                  </button>
                  ;
                </div>

                {isModalOpen && (
                  <div className="modal">
                    <div className="modal-content">
                      {modalType === "read" ? (
                        <p>Este livro já foi lido.</p>
                      ) : (
                        <p>Adicionado à lista de leitura.</p>
                      )}
                      <button
                        className="modal-button"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Fechar
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="book-descriptions">
                <h1>
                  <b>{searchResults[currentBookIndex].title}</b>
                </h1>
                <h2>{searchResults[currentBookIndex].autor}</h2>
                <h3>
                  <b>Gênero:</b>
                  {searchResults[currentBookIndex].genero}
                </h3>
                <div className="description">
                  <p>{searchResults[currentBookIndex].descricao}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </body>

      <Footer />
    </section>
  );
};

export default Home;

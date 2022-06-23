import { useState } from "react";
import Script from "next/script";
import Book from "../components/Book";
import Pagination from "../components/Pagination";
import books from "../data/books.json";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 12;
  const countPages = Math.ceil(books.length / booksPerPage);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const booksDisplayed = () => {
    return books.slice(
      (currentPage - 1) * booksPerPage,
      currentPage * booksPerPage
    );
  };

  return (
    <div className="w-full p-8">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-73K8Q4M5SH"
      ></Script>
      <Script id="google-analytics">
        {`
                     window.dataLayer = window.dataLayer || [];
                     function gtag(){dataLayer.push(arguments)}
                     gtag('js', new Date());
 
                     gtag('config', 'G-73K8Q4M5SH');
                    `}
      </Script>
      <div className="text-center mb-4">
        <h1 className="font-bold text-2xl">Livros de Engenharia de Software</h1>
        <span className="px-4">
          Criando uma base de bons livros para impulsionar o aprendizado na área
          de Engenharia de Software.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-4">
        {booksDisplayed().map((book, bookId) => (
          <Book
            key={bookId}
            name={book.name}
            image={book.image}
            buyLink={book.buyLink}
            store={book.store}
          />
        ))}
      </div>
      <Pagination
        countPages={countPages}
        onPrev={prevPage}
        onNext={nextPage}
        currentPage={currentPage}
      />
      <div>
        <div className="mt-4 w-full border border-gray-500"></div>
        <p className="text-center">
          Para os simpatizantes de open-source: licenciado sob uma licença de
          código aberto.
        </p>
        <p className="text-center">
          Para os demais: todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}

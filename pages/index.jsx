import { useState } from "react";
import Books from "../components/Books";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Header from "../components/Header";
import ViewMore from "../components/ViewMore";
import booksJson from "../data/books.json";
import SearchAndSort from "../components/SearchAndSort";
import RightSideInfo from "../components/RightSideInfo";

const LIMIT_BOOKS = 8;

export default function Home() {
  const [countBooksDisplayed, setCountBooksDisplayed] = useState(LIMIT_BOOKS);
  const [books, setBooks] = useState(booksJson);
  const [booksFiltered, setBooksFiltered] = useState(booksJson);
  const [booksDisplayed, setBooksDisplayed] = useState(books.slice(0, countBooksDisplayed))

  const showMoreBooks = () => {
    if (countBooksDisplayed < books.length) {
      const countBooksDisplayed_ = countBooksDisplayed + LIMIT_BOOKS
      setCountBooksDisplayed(countBooksDisplayed_)
      setBooksDisplayed(booksFiltered.slice(0, countBooksDisplayed_))
    }
  };

  const sortBooks = (filterName) => {
    if (filterName === "a-z") {
      setBooks(
        booksFiltered.sort((a, b) => {
          const a_ = a.name.toLowerCase();
          const b_ = b.name.toLowerCase();
          if (a_ < b_) return -1;
          if (a_ > b_) return 1;
          return 0;
        })
      );
      setBooksDisplayed(booksFiltered.slice(0, countBooksDisplayed));
    }
    if (filterName === "z-a") {
      setBooks(
        booksFiltered.sort((a, b) => {
          const a_ = a.name.toLowerCase();
          const b_ = b.name.toLowerCase();
          if (a_ > b_) return -1;
          if (a_ < b_) return 1;
          return 0;
        })
      );
      setBooksDisplayed(booksFiltered.slice(0, countBooksDisplayed));
    }
  };

  const searchBooks = (value) => {
    if (value === '') {
      setCountBooksDisplayed(LIMIT_BOOKS)
      setBooksFiltered(books)
      setBooksDisplayed(books.slice(0, LIMIT_BOOKS))
    }
    else {
      const books_ = books.filter(book => book.name.toLowerCase().includes(value.toLowerCase()))
      setCountBooksDisplayed(LIMIT_BOOKS)
      setBooksFiltered(books_)
      setBooksDisplayed(books_.slice(0, LIMIT_BOOKS))
    }
  }

  return (
    <div className="w-full p-8">
      <RightSideInfo />
      <GoogleAnalytics />
      <Header />
      <SearchAndSort onSort={sortBooks} onChange={searchBooks}/>
      <Books data={booksDisplayed} />
      <ViewMore
        onClick={showMoreBooks}
        hide={countBooksDisplayed >= booksFiltered.length}
      />
      <Footer />
    </div>
  );
}

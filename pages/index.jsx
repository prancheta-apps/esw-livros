import { useEffect, useState } from "react";
import Books from "../components/Books";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";
import Header from "../components/Header";
import ViewMore from "../components/ViewMore";
import booksJson from "../data/books.json";
import Filters from "../components/Filters";
import RightSideInfo from "../components/RightSideInfo";

const LIMIT_BOOKS = 8;

export default function Home() {
  const [books, setBooks] = useState(booksJson);
  const [countBooksDisplayed, setCountBooksDisplayed] = useState(LIMIT_BOOKS);
  const [booksDisplayed, setBooksDisplayed] = useState(books.slice(0, countBooksDisplayed))

  const showMoreBooks = () => {
    if (countBooksDisplayed < books.length) {
      const countBooksDisplayed_ = countBooksDisplayed + LIMIT_BOOKS
      setCountBooksDisplayed(countBooksDisplayed_)
      setBooksDisplayed(books.slice(0, countBooksDisplayed_))
    }
  };

  const filterBooks = (filterName) => {
    if (filterName === "a-z") {
      setBooks(
        books.sort((a, b) => {
          const a_ = a.name.toLowerCase();
          const b_ = b.name.toLowerCase();
          if (a_ < b_) return -1;
          if (a_ > b_) return 1;
          return 0;
        })
      );
      setBooksDisplayed(books.slice(0, countBooksDisplayed));
    }
    if (filterName === "z-a") {
      setBooks(
        books.sort((a, b) => {
          const a_ = a.name.toLowerCase();
          const b_ = b.name.toLowerCase();
          if (a_ > b_) return -1;
          if (a_ < b_) return 1;
          return 0;
        })
      );
      setBooksDisplayed(books.slice(0, countBooksDisplayed));
    }
  };

  return (
    <div className="w-full p-8">
      <RightSideInfo />
      <GoogleAnalytics />
      <Header />
      <Filters onFilter={filterBooks} />
      <Books data={booksDisplayed} />
      <ViewMore
        onClick={showMoreBooks}
        hide={countBooksDisplayed >= books.length}
      />
      <Footer />
    </div>
  );
}

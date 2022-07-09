import Book from "./Book";

export default function Books({ data }) {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center mb-4">
        {data.map((book, bookId) => (
          <Book
            key={bookId}
            name={book.name}
            image={book.image}
            buyLink={book.buyLink}
          />
        ))}
      </div>
      {data.length === 0 && (
        <div className="text-center text-3xl mt-20 mb-40">Nenhum livro encontrado...</div>
      )}
    </>
  );
}

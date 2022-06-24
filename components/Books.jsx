import Book from "./Book";

export default function Books({data}){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-4">
        {data.map((book, bookId) => (
          <Book
            key={bookId}
            name={book.name}
            image={book.image}
            buyLink={book.buyLink}
            store={book.store}
          />
        ))}
      </div>
    )
}
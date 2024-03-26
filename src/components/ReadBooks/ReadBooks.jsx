import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../Utility/localStorage";
import ReadBook from "../ReadBook/ReadBook";


const ReadBooks = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    console.log(readBooks)

    useEffect(() => {
        const storedBooksIds = getStoredBooks();
        if (books.length > 0) {
            const readBook = books.filter(book => storedBooksIds.includes(book.bookId))
            // console.log(readBook)
            setReadBooks(readBook)
        }
    }, [books])

    return (
        <div>
            <div>
                {
                    readBooks.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;
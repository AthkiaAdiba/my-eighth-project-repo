import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { wishGetStoredBooks } from "../Utility/wishLocalStorage";
import WishBook from "../WishBook/WishBook";


const WishBookLists = () => {
    const books = useLoaderData();
    const [wishBooks, setWishBooks] = useState([]);
    console.log(wishBooks)

    useEffect(() => {
        const storedWishBooksIds = wishGetStoredBooks();
        if (books.length > 0) {
            const wishBook = books.filter(book => storedWishBooksIds.includes(book.bookId))
            
            setWishBooks(wishBook)
        }
    }, [books])

    return (
        <div>
            <div>
                {
                    wishBooks.map(book => <WishBook key={book.bookId} book={book}></WishBook>)
                }
            </div>
        </div>
    );
};

export default WishBookLists;
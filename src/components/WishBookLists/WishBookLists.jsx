import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../Utility/localStorage";
import ReadBook from "../ReadBook/ReadBook";
import { wishGetStoredBooks } from "../Utility/wishLocalStorage";

const WishBookLists = () => {
    const books = useLoaderData();
    const [wishBooks, setWishBooks] = useState([]);
    console.log(wishBooks)

    useEffect(() => {
        const storedBooksIds = wishGetStoredBooks;
        if (books.length > 0) {
            const wishBook = books.filter(book => storedBooksIds.includes(book.bookId))
            // console.log(readBook)
            setWishBooks(wishBook)
        }
    }, [books])

    return (
        <div>
            <h2>From wish book lists</h2>
        </div>
    );
};

export default WishBookLists;
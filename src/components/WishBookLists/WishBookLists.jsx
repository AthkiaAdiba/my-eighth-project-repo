import { useContext } from "react";
import WishBook from "../WishBook/WishBook";
import { WishSortingContext } from "../../pages/ListedBooks";


const WishBookLists = () => {
    const [wishSortingData] = useContext(WishSortingContext)

    return (
        <div>
            <div>
                {
                    wishSortingData.map(book => <WishBook key={book.bookId} book={book}></WishBook>)
                }
            </div>
        </div>
    );
};

export default WishBookLists;
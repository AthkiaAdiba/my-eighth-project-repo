import { useContext } from "react";
import ReadBook from "../ReadBook/ReadBook";
import { SortingDataContext } from "../../pages/ListedBooks";


const ReadBooks = () => {
    const [sortingData] = useContext(SortingDataContext)

    return (
        <div>
            <div>
                {
                    sortingData.map(book => <ReadBook key={book.bookId} book={book}></ReadBook>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;
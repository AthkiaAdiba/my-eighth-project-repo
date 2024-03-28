import { createContext, useEffect, useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../components/Utility/localStorage";
import { IoIosArrowDown } from "react-icons/io";


export const SortingDataContext = createContext([])

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    const [sortingData, setSortingData] = useState([]);
    console.log(sortingData)

    const handleSorting = sortText => {
        if (sortText === 'all') {
            setSortingData([...readBooks])
        }
        else if (sortText === 'rating') {
            const readBooksOfRating = readBooks.sort((a, b) => {
                return b.rating - a.rating;
            })
            setSortingData([...readBooksOfRating]);
        }
        else if (sortText === 'pages') {
            const readBooksOfPages = readBooks.sort((a, b) => {
                return b.totalPages - a.totalPages;
            })
            setSortingData([...readBooksOfPages])
        }
        else if (sortText === 'year') {
            const readBooksOfYear = readBooks.sort((a, b) => {
                return b.yearOfPublishing - a.yearOfPublishing;
            })
            setSortingData([...readBooksOfYear]);
        }
    }

    useEffect(() => {
        const storedBooksIds = getStoredBooks();
        if (books.length > 0) {
            const readBook = books.filter(book => storedBooksIds.includes(book.bookId))
            // console.log(readBook)
            setReadBooks(readBook);
            setSortingData(readBook);
        }
    }, [books])

    return (
        <div>
            {/* title */}
            <div className="bg-base-200 py-9 rounded-xl mt-10">
                <h2 className="font-bold text-3xl text-[#131313] text-center">Books</h2>
            </div>
            {/* dropdown */}
            <div className="text-center mt-8">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white">Sort By <IoIosArrowDown></IoIosArrowDown></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
                        <li onClick={() => handleSorting('all')} className="hover:bg-[#23BE0A] hover:text-white rounded-lg"><a>All</a></li>
                        <li onClick={() => handleSorting('rating')} className="hover:bg-[#23BE0A] hover:text-white rounded-lg"><a>Rating</a></li>
                        <li onClick={() => handleSorting('pages')} className="hover:bg-[#23BE0A] hover:text-white rounded-lg"><a>Number of Pages</a></li>
                        <li onClick={() => handleSorting('year')} className="hover:bg-[#23BE0A] hover:text-white rounded-lg"><a>Published Year</a></li>
                    </ul>
                </details>
            </div>

            {/* tab */}
            <div className="mt-10 mb-24">
                <div className="flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap">
                    <Link to={''} onClick={() => setTabIndex(0)} className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'}`}>
                        <span className="text-lg text-[#131313cc]">Read Books</span>
                    </Link>
                    <Link to={'wishBookLists'} onClick={() => setTabIndex(1)} className={`flex cursor-pointer items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'}`}>
                        <span className="text-lg text-[#131313cc]">Wishlist Books</span>
                    </Link>
                </div>
                <SortingDataContext.Provider value={[sortingData]}>
                    <Outlet></Outlet>
                </SortingDataContext.Provider>
            </div>
        </div>
    );
};

export default ListedBooks;